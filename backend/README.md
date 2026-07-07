# Alumni Portal: Birthday Wisher & Read Tracking System

This sub-system automatically queries the database daily to check if any alumni celebrate their birthday today, sends them a beautifully styled HTML email using Gmail SMTP, and tracks if and when they open/read the email.

---

## 🛠️ Features

1. **Automatic Matches**: Matches month and day (`MM-DD`) ignoring the year, so it runs automatically every year.
2. **PHPMailer Integration**: Uses the robust PHPMailer library via Gmail SMTP with secure TLS encryption.
3. **Open/Read Tracking**: Embeds a silent 1x1 transparent tracking pixel in the HTML email body. When the recipient opens the email, a web request is made back to the server, marking the status as **Read** (`is_read = 1`) along with the exact date and time.
4. **Log System**: Maintains `birthday_wishes_log` with status (`pending`, `sent`, `failed`), email destination, and read receipts.

---

## 🚀 Setup Instructions

### 1. Install PHPMailer
Since we use Composer, you can install PHPMailer by running this command in the `backend/` directory:
```bash
# If composer is installed globally:
composer require phpmailer/phpmailer

# If using the local composer.phar from the project root:
D:\xampp\php\php.exe ..\composer.phar require phpmailer/phpmailer
```

### 2. Generate a Gmail App Password
Gmail blocks standard password authentication for SMTP requests due to security regulations. You **must** generate a 16-character App Password:
1. Go to your [Google Account Settings](https://myaccount.google.com/).
2. Select **Security** from the left-hand menu.
3. Ensure **2-Step Verification** is enabled under *"Signing in to Google"*.
4. Search for or select **App passwords** (usually under the 2-step verification settings).
5. Choose **Select app** -> *Other (Custom name)*, enter a name like `Alumni Portal Wisher`, and click **Generate**.
6. Copy the **16-character password** shown (e.g., `xxxx xxxx xxxx xxxx`).

### 3. Update Configurations
Open `backend/config.php` and configure:
- **Database Connection**: Set `DB_HOST`, `DB_NAME`, `DB_USER`, and `DB_PASS`.
- **SMTP Credentials**:
  - Set `SMTP_USER` and `SMTP_FROM_EMAIL` to your Gmail address.
  - Set `SMTP_PASS` to the generated 16-character App Password (without spaces, or with them).
- **Tracking URL**:
  - Update `TRACKING_BASE_URL` to point to the actual hosting address of `track_open.php` (e.g., `http://yourdomain.com/backend/track_open.php`). For local development, `http://localhost/alumni-portal/backend/track_open.php` is used.

---

## 🧪 Manual Testing

You can trigger the script manually from the command line:

```bash
# Using standard global PHP:
php send_birthday_wishes.php

# Using XAMPP PHP path on Windows:
D:\xampp\php\php.exe send_birthday_wishes.php
```

### Verification
1. Open phpMyAdmin and view `alumni_details_2024`. Make sure at least one record has a `dob` date matching today's month and day (e.g. `1995-07-07`).
2. Run the command. The console will log success/failure.
3. Check the `birthday_wishes_log` table; it should display the status `sent`.
4. Open the email in the recipient's inbox (ensure you display images/external content in the email client).
5. Refresh the `birthday_wishes_log` table in phpMyAdmin. You will see `is_read` change to `1` with the exact `read_at` timestamp.

---

## ⏰ Automation

### 1. Windows Task Scheduler (XAMPP on Windows)
To execute the script automatically every day at 8:00 AM:
1. Open the start menu, search for **Task Scheduler**, and open it.
2. Click **Create Basic Task...** in the right-side Actions pane.
3. Name: `Alumni Birthday Wisher`. Click **Next**.
4. Trigger: Choose **Daily**. Click **Next**.
5. Set the start time (e.g., `08:00:00 AM`) and recur every `1` day. Click **Next**.
6. Action: Choose **Start a program**. Click **Next**.
7. Configure the program:
   - **Program/script**: `D:\xampp\php\php.exe` (or the path to your php.exe)
   - **Add arguments**: `send_birthday_wishes.php`
   - **Start in**: `C:\Users\IIITK\.gemini\antigravity\scratch\alumni-portal\backend` (absolute path of the backend folder)
8. Click **Next**, review the summary, and click **Finish**.

### 2. Linux Cron Job (Production Server)
To run the script every day at 8:00 AM on a Linux server:
1. Open the crontab editor:
   ```bash
   crontab -e
   ```
2. Add the following line to the end of the file:
   ```cron
   0 8 * * * /usr/bin/php /var/www/html/alumni-portal/backend/send_birthday_wishes.php >> /var/log/birthday_wishes.log 2>&1
   ```
   *Note: Adjust `/usr/bin/php` and `/var/www/html/alumni-portal/...` to your actual PHP binary path and project path.*
