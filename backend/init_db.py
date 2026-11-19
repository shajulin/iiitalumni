"""
init_db.py  –  Convert MySQL dump → SQLite for the Alumni Portal
Run once:  python3 init_db.py
"""

import sqlite3, re, os

SQL_FILE = os.path.join(os.path.dirname(__file__), "../../..", 
                        "Downloads/alumni_portal_db 1.sql")
# Resolve path relative to home
SQL_FILE = os.path.expanduser("~/Downloads/alumni_portal_db 1.sql")
DB_FILE  = os.path.join(os.path.dirname(__file__), "alumni_portal.db")

def mysql_to_sqlite(sql: str) -> str:
    # Remove MySQL-specific stuff
    sql = re.sub(r"--[^\n]*\n", "\n", sql)                    # comments
    sql = re.sub(r"/\*.*?\*/", "", sql, flags=re.DOTALL)      # block comments
    sql = re.sub(r"ENGINE\s*=\s*\w+[^;]*", "", sql)
    sql = re.sub(r"DEFAULT CHARSET\s*=[^\s,;)]+", "", sql)
    sql = re.sub(r"COLLATE\s+\S+", "", sql)
    sql = re.sub(r"AUTO_INCREMENT\s*=\s*\d+", "", sql)
    sql = re.sub(r"\bAUTO_INCREMENT\b", "", sql)
    sql = re.sub(r"\bUNSIGNED\b", "", sql)
    sql = re.sub(r"\bTINYINT\(\d+\)", "INTEGER", sql)
    sql = re.sub(r"\bINT\(\d+\)", "INTEGER", sql)
    sql = re.sub(r"\bBIGINT\(\d+\)", "INTEGER", sql)
    sql = re.sub(r"\bSMALLINT\(\d+\)", "INTEGER", sql)
    sql = re.sub(r"\bMEDIUMINT\(\d+\)", "INTEGER", sql)
    sql = re.sub(r"\bTEXT\s+CHARACTER SET[^\s,)]+", "TEXT", sql)
    sql = re.sub(r"CHARACTER SET \w+", "", sql)
    sql = re.sub(r"SET NAMES [^\n;]+;", "", sql)
    sql = re.sub(r"SET @[^\n;]+;", "", sql)
    sql = re.sub(r"SET SQL_[^\n;]+;", "", sql)
    sql = re.sub(r"LOCK TABLES[^\n;]+;", "", sql)
    sql = re.sub(r"UNLOCK TABLES\s*;", "", sql)
    sql = re.sub(r"USE `[^`]+`\s*;", "", sql)
    sql = re.sub(r"CREATE DATABASE[^\n;]+;", "", sql)
    sql = re.sub(r"DROP TABLE IF EXISTS `([^`]+)`", r"DROP TABLE IF EXISTS \1", sql)
    sql = re.sub(r"CREATE TABLE `([^`]+)`", r"CREATE TABLE IF NOT EXISTS \1", sql)
    sql = re.sub(r"INSERT INTO `([^`]+)`", r"INSERT OR IGNORE INTO \1", sql)
    sql = re.sub(r"`", "", sql)                                # backticks
    sql = re.sub(r"\bKEY\s+\w+\s*\([^)]+\),?", "", sql)      # index lines
    sql = re.sub(r"\bUNIQUE KEY\s+\w+\s*\([^)]+\),?", "", sql)
    sql = re.sub(r"\bFULLTEXT KEY\s+\w+\s*\([^)]+\),?", "", sql)
    # Fix trailing commas before closing paren
    sql = re.sub(r",\s*\)", ")", sql)
    return sql

def init():
    if os.path.exists(DB_FILE):
        print(f"✅ DB already exists: {DB_FILE}")
        return

    print(f"Reading SQL file: {SQL_FILE}")
    with open(SQL_FILE, "r", encoding="utf-8", errors="replace") as f:
        raw = f.read()

    converted = mysql_to_sqlite(raw)

    conn = sqlite3.connect(DB_FILE)
    cur  = conn.cursor()

    statements = [s.strip() for s in converted.split(";") if s.strip()]
    ok = fail = 0
    for stmt in statements:
        try:
            cur.executescript(stmt + ";")
            ok += 1
        except Exception as e:
            if "syntax" in str(e).lower() or "no such" in str(e).lower():
                fail += 1

    conn.commit()
    conn.close()
    print(f"✅ SQLite DB created: {DB_FILE}  (ok={ok}, skip={fail})")

if __name__ == "__main__":
    init()
