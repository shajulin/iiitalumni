"""
app.py  –  Python Flask backend for Alumni Portal
Replaces all PHP files. No XAMPP needed.
Run:  python3 app.py
API:  http://localhost:8000
"""

import sqlite3, os, hashlib, smtplib, logging, datetime, json
from email.mime.multipart import MIMEMultipart
from email.mime.text      import MIMEText
from flask                import Flask, request, jsonify
from flask_cors           import CORS

# ─── CONFIG ────────────────────────────────────────────────────────────────────
SMTP_HOST       = "smtp.gmail.com"
SMTP_PORT       = 587
SMTP_USER       = "hariramakrishnan@iiitkottayam.ac.in"
SMTP_PASS       = "rbxczghxvxfehmgh"
SMTP_FROM_EMAIL = "hariramakrishnan@iiitkottayam.ac.in"
SMTP_FROM_NAME  = "Alumni Association Portal"

DB_FILE = os.path.join(os.path.dirname(__file__), "alumni_portal.db")

BATCH_TABLE_MAP = {
    "2016":          "alumni_2016_batch",
    "2017":          "alumni_2017_batch",
    "2019":          "alumni_2019_admission",
    "2020":          "alumni_2020_admission",
    "2021":          "alumni_2021_admission",
    "higher_studies":"alumni_higher_studies",
    "details_2024":  "alumni_details_2024",
}

# ─── FLASK APP ─────────────────────────────────────────────────────────────────
app = Flask(__name__)
CORS(app)
logging.basicConfig(level=logging.INFO)

# ─── DB HELPER ─────────────────────────────────────────────────────────────────
def get_db():
    conn = sqlite3.connect(DB_FILE)
    conn.row_factory = sqlite3.Row
    return conn

# ─── PASSWORD HASH (bcrypt-compatible via sha256 fallback) ────────────────────
def hash_password(pw: str) -> str:
    return hashlib.sha256(pw.encode()).hexdigest()

def verify_password(pw: str, stored: str) -> bool:
    # Support both sha256 and PHP password_hash (bcrypt starts with $2y$)
    if stored.startswith("$2y$") or stored.startswith("$2b$"):
        try:
            import bcrypt
            return bcrypt.checkpw(pw.encode(), stored.replace("$2y$","$2b$").encode())
        except ImportError:
            pass
    return hash_password(pw) == stored

# ─── ROUTES ───────────────────────────────────────────────────────────────────

@app.route("/api/login", methods=["POST", "OPTIONS"])
def login():
    if request.method == "OPTIONS":
        return jsonify({}), 200

    data     = request.get_json() or {}
    email    = (data.get("email") or "").strip()
    password = data.get("password") or ""

    if not email or not password:
        return jsonify({"status": "error", "message": "Incomplete credentials"}), 400

    db = get_db()
    try:
        row = db.execute(
            """SELECT u.id, u.full_name, u.email, u.password_hash, u.role,
                      ap.batch, ap.roll_number
               FROM users u
               LEFT JOIN alumni_profiles ap ON ap.user_id = u.id
               WHERE u.email = ? LIMIT 1""",
            (email,)
        ).fetchone()

        if not row:
            return jsonify({"status": "error", "message": "User not found"}), 401

        if not verify_password(password, row["password_hash"]):
            return jsonify({"status": "error", "message": "Invalid password"}), 401

        batch       = row["batch"]
        batch_table = BATCH_TABLE_MAP.get(batch) if batch else None

        return jsonify({
            "status":  "success",
            "message": "Login successful",
            "user": {
                "id":          row["id"],
                "full_name":   row["full_name"],
                "email":       row["email"],
                "role":        row["role"],
                "batch":       batch,
                "roll_number": row["roll_number"],
                "batch_table": batch_table,
            }
        })
    finally:
        db.close()


@app.route("/api/register", methods=["POST", "OPTIONS"])
def register():
    if request.method == "OPTIONS":
        return jsonify({}), 200

    data = request.get_json() or {}
    required = ["full_name", "email", "password", "batch", "roll_number"]
    for f in required:
        if not data.get(f):
            return jsonify({"status": "error", "message": f"Missing field: {f}"}), 400

    full_name   = data["full_name"].strip()
    email       = data["email"].strip()
    password    = data["password"]
    batch       = data["batch"]
    roll_number = data["roll_number"].strip()

    if batch not in BATCH_TABLE_MAP:
        return jsonify({"status": "error", "message": "Invalid batch"}), 400

    batch_table = BATCH_TABLE_MAP[batch]
    pw_hash     = hash_password(password)

    db = get_db()
    try:
        # Check duplicate
        existing = db.execute("SELECT id FROM users WHERE email=?", (email,)).fetchone()
        if existing:
            return jsonify({"status": "error", "message": "Email already registered"}), 409

        # Insert user
        cur = db.execute(
            "INSERT INTO users (full_name, email, password_hash, role) VALUES (?,?,?,'alumni')",
            (full_name, email, pw_hash)
        )
        user_id = cur.lastrowid

        # Insert alumni_profiles
        db.execute(
            "INSERT INTO alumni_profiles (user_id, batch, roll_number) VALUES (?,?,?)",
            (user_id, batch, roll_number)
        )

        # Insert into batch-specific table
        first_name = full_name.split()[0]
        last_name  = " ".join(full_name.split()[1:])
        ts         = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")

        if batch_table == "alumni_details_2024":
            db.execute(
                """INSERT INTO alumni_details_2024
                   (timestamp, student_name, batch, email)
                   VALUES (?,?,?,?)""",
                (ts, full_name, batch, email)
            )
        elif batch_table == "alumni_2016_batch":
            db.execute(
                """INSERT INTO alumni_2016_batch
                   (timestamp, username, first_name, last_name, roll_no, personal_email)
                   VALUES (?,?,?,?,?,?)""",
                (ts, email, first_name, last_name, roll_number, email)
            )
        else:
            db.execute(
                f"""INSERT INTO {batch_table}
                   (timestamp, username, first_name, last_name, roll_no, personal_email)
                   VALUES (?,?,?,?,?,?)""",
                (ts, email, first_name, last_name, roll_number, email)
            )

        db.commit()
        return jsonify({
            "status":  "success",
            "message": f"Registration successful! Saved to {batch_table}.",
            "batch":   batch,
            "table":   batch_table,
        })
    except Exception as e:
        db.rollback()
        return jsonify({"status": "error", "message": str(e)}), 500
    finally:
        db.close()


@app.route("/api/alumni_data", methods=["GET", "POST", "OPTIONS"])
def alumni_data():
    if request.method == "OPTIONS":
        return jsonify({}), 200

    dataset = request.args.get("dataset", "")
    if dataset not in BATCH_TABLE_MAP:
        return jsonify({"status": "error", "message": "Invalid dataset"}), 400

    table = BATCH_TABLE_MAP[dataset]
    db    = get_db()
    try:
        if request.method == "GET":
            rows = db.execute(f"SELECT * FROM {table} ORDER BY id ASC").fetchall()
            return jsonify({"status": "success", "data": [dict(r) for r in rows]})

        elif request.method == "POST":
            payload = request.get_json() or {}
            cols   = ", ".join(payload.keys())
            pholds = ", ".join(["?"] * len(payload))
            vals   = list(payload.values())
            cur    = db.execute(f"INSERT INTO {table} ({cols}) VALUES ({pholds})", vals)
            db.commit()
            return jsonify({"status": "success", "message": "Inserted", "id": cur.lastrowid})
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500
    finally:
        db.close()


# ─── BIRTHDAY WISHER ──────────────────────────────────────────────────────────

@app.route("/api/birthday_wisher", methods=["POST", "OPTIONS"])
def birthday_wisher():
    """Trigger birthday wisher manually via API (or call send_birthday_wishes() directly)."""
    if request.method == "OPTIONS":
        return jsonify({}), 200
    result = send_birthday_wishes()
    return jsonify(result)


def send_birthday_wishes(test_mode: bool = False):
    """
    Scans ALL alumni tables for today's birthdays and sends Gmail emails.
    Logs to birthday_wishes_log table.
    """
    today      = datetime.date.today()
    today_mm   = f"{today.month:02d}"
    today_dd   = f"{today.day:02d}"
    log_msgs   = []
    total_sent = total_failed = total_found = 0

    def log(msg):
        log_msgs.append(msg)
        logging.info(msg)

    log(f"=== Birthday Wisher Started: {today} ===")

    db = get_db()
    try:
        # Detect name + email columns per table
        for dataset_key, table in BATCH_TABLE_MAP.items():
            # Get column names
            try:
                cols_rows = db.execute(f"PRAGMA table_info({table})").fetchall()
            except Exception:
                continue
            cols = [r["name"] for r in cols_rows]

            # Detect name column
            name_col  = next((c for c in ["student_name","first_name"] if c in cols), None)
            email_col = next((c for c in ["personal_email","email"] if c in cols), None)
            dob_col   = "dob" if "dob" in cols else None

            if not (name_col and email_col and dob_col):
                log(f"  SKIP {table}: missing name/email/dob column")
                continue

            # Query today's birthdays
            rows = db.execute(
                f"""SELECT id, {name_col} AS name, {email_col} AS email, {dob_col} AS dob
                    FROM {table}
                    WHERE {email_col} IS NOT NULL AND TRIM({email_col}) != ''
                      AND {dob_col}  IS NOT NULL AND TRIM({dob_col})  != ''
                      AND SUBSTR({dob_col},6,2) = ?
                      AND SUBSTR({dob_col},9,2) = ?""",
                (today_mm, today_dd)
            ).fetchall()

            for r in rows:
                total_found += 1
                alumni_id = r["id"]
                name      = (r["name"] or "Alumni").strip()
                email     = (r["email"] or "").strip()

                if not email:
                    continue

                # Duplicate check
                already = db.execute(
                    """SELECT id FROM birthday_wishes_log
                       WHERE alumni_id=? AND table_name=? AND sent_date=? AND status='sent'""",
                    (alumni_id, table, str(today))
                ).fetchone()
                if already:
                    log(f"  SKIP (already sent): {name} <{email}>")
                    continue

                # Pre-insert pending
                cur = db.execute(
                    """INSERT INTO birthday_wishes_log
                       (alumni_id, table_name, sent_date, status, email_sent_to, is_read)
                       VALUES (?,?,?,'pending',?,0)""",
                    (alumni_id, table, str(today), email)
                )
                log_id = cur.lastrowid
                db.commit()

                log(f"  Processing: {name} <{email}> (table={table})")

                if test_mode:
                    db.execute("UPDATE birthday_wishes_log SET status='sent' WHERE id=?", (log_id,))
                    db.commit()
                    total_sent += 1
                    log(f"  [TEST MODE] Would send to {email}")
                    continue

                # Build HTML email
                year = today.year
                html = f"""<!DOCTYPE html>
<html><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>Happy Birthday!</title></head>
<body style="margin:0;padding:0;background:#f0f4ff;font-family:'Segoe UI',Arial,sans-serif;">
<div style="max-width:600px;margin:30px auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(99,102,241,.12);">
  <div style="background:linear-gradient(135deg,#6366f1,#a855f7);padding:48px 32px;text-align:center;color:#fff;">
    <h1 style="margin:0 0 8px;font-size:34px;font-weight:800;">Happy Birthday! 🎂</h1>
    <p style="margin:0;font-size:16px;opacity:.9;">Warmest wishes from your Alma Mater</p>
  </div>
  <div style="padding:36px 32px;color:#334155;line-height:1.8;">
    <h2 style="margin:0 0 16px;font-size:22px;color:#1e293b;">Dear {name},</h2>
    <p>On behalf of the entire Alumni Association and the college community, we wish you a very <strong>Happy Birthday</strong>! 🎉</p>
    <div style="border-left:4px solid #6366f1;background:#f8fafc;padding:16px 20px;margin:24px 0;font-style:italic;color:#475569;border-radius:0 10px 10px 0;">
      "May this special day mark the beginning of a year filled with joy, good health, great achievements, and endless possibilities."
    </div>
    <p>We are proud of everything you have accomplished. Stay connected through the Alumni Portal!</p>
    <p>With warm regards,<br><strong>Alumni Relations Team</strong><br><em>IIIT Kottayam</em></p>
  </div>
  <div style="background:#f8fafc;padding:20px 32px;text-align:center;font-size:12px;color:#94a3b8;border-top:1px solid #e2e8f0;">
    <p>Sent with ❤️ by the Alumni Association Portal &copy; {year}</p>
  </div>
</div>
</body></html>"""

                # Send via Gmail SMTP
                try:
                    msg = MIMEMultipart("alternative")
                    msg["Subject"] = f"Happy Birthday, {name}! 🎉"
                    msg["From"]    = f"{SMTP_FROM_NAME} <{SMTP_FROM_EMAIL}>"
                    msg["To"]      = email
                    msg.attach(MIMEText(f"Dear {name},\n\nHappy Birthday! Wishing you a wonderful year.\n\nBest Regards,\nAlumni Association Team", "plain"))
                    msg.attach(MIMEText(html, "html"))

                    with smtplib.SMTP(SMTP_HOST, SMTP_PORT) as server:
                        server.starttls()
                        server.login(SMTP_USER, SMTP_PASS)
                        server.sendmail(SMTP_FROM_EMAIL, email, msg.as_string())

                    db.execute("UPDATE birthday_wishes_log SET status='sent' WHERE id=?", (log_id,))
                    db.commit()
                    log(f"  ✅ Sent to {email}")
                    total_sent += 1

                except Exception as e:
                    db.execute("UPDATE birthday_wishes_log SET status='failed' WHERE id=?", (log_id,))
                    db.commit()
                    log(f"  ❌ FAILED: {email} — {e}")
                    total_failed += 1

    finally:
        db.close()

    summary = f"=== Done | Found: {total_found} | Sent: {total_sent} | Failed: {total_failed} ==="
    log(summary)
    return {
        "status":       "success",
        "found":        total_found,
        "sent":         total_sent,
        "failed":       total_failed,
        "date":         str(today),
        "log":          log_msgs,
    }


# ─── MAIN ──────────────────────────────────────────────────────────────────────
if __name__ == "__main__":
    if not os.path.exists(DB_FILE):
        print("⚠️  DB not found! Run:  python3 init_db.py  first")
    else:
        print("✅ DB found:", DB_FILE)
    print("🚀 Starting Alumni Portal Backend on http://localhost:8000")
    app.run(host="0.0.0.0", port=8000, debug=True)
