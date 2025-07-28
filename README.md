# 🛜 IP Address Automation to Google Sheet

This Node.js script automatically fetches your machine's **public IP address** and writes it to a **Google Sheet** along with a timestamp. Ideal for tracking dynamic IP changes or logging activity from different locations.

---

## 📦 Features

- Retrieves public IP via [ipify.org](https://www.ipify.org/)
- Appends IP and timestamp to a specified Google Sheet


## 🚀 Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/AmanPawar26/IP-Address-Automation.git
cd IP-Address-Automation
````

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Create Google Service Account Credentials

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create or select a project (e.g., `UtilityApp`)
3. Go to **APIs & Services > Credentials**
4. Click **Create Credentials > Service Account**
5. Grant it access to **Google Sheets API**
6. Download the `.json` key file

> 📁 Save the JSON file inside a folder named `keys/` in the project root

---

### 4. Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com/) and create a new sheet
2. Click **Share**
3. Share it with your service account’s email
   Example: `your-bot@project-id.iam.gserviceaccount.com`
4. Give **Editor** access

---

### 5. Configure Environment Variables

Create a `.env` file in the project root with the following content:

```env
SHEET_ID=your_google_sheet_id_here
GOOGLE_SHEETS_KEY_PATH=keys/sheets-credentials.json
```

* Replace `your_google_sheet_id_here` with the actual Sheet ID from the URL
  (e.g., `https://docs.google.com/spreadsheets/d/THIS_IS_YOUR_ID/edit`)
* Make sure the `GOOGLE_SHEETS_KEY_PATH` points to your credentials file

---

### 6. Run the Script Manually

Run the following command in the terminal:

```bash
node ip_to_sheet.js
```

If successful, your public IP and current timestamp will be written to the Google Sheet.

---


