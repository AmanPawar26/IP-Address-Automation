    require('dotenv').config();
    const axios = require('axios');
    const { google } = require('googleapis');
    const path = require('path');

    const SPREADSHEET_ID = process.env.SHEET_ID; 
    const RANGE = 'Sheet1!A1'; 
    const CREDENTIALS_PATH = path.join(__dirname, process.env.GOOGLE_SHEETS_KEY_PATH);

    async function getPublicIp() {
        try {
            const response = await axios.get('https://api.ipify.org?format=json');
            return response.data.ip;
        } catch (error) {
            console.error('Error fetching public IP:', error);
            return null;
        }
    }

    async function writeToGoogleSheet(ipAddress) {
        if (!ipAddress) {
            console.log('No IP address to write.');
            return;
        }

        try {
            const auth = new google.auth.GoogleAuth({
                keyFile: CREDENTIALS_PATH,
                scopes: ['https://www.googleapis.com/auth/spreadsheets'],
            });

            const sheets = google.sheets({ version: 'v4', auth });

            await sheets.spreadsheets.values.append({
                spreadsheetId: SPREADSHEET_ID,
                range: RANGE,
                valueInputOption: 'RAW',
                requestBody: {
                    values: [[ipAddress, new Date().toLocaleString()]], // Write IP and timestamp
                },
            });

            console.log(`Public IP "${ipAddress}" written to Google Sheet.`);
        } catch (error) {
            console.error('Error writing to Google Sheet:', error);
        }
    }

    async function main() {
        const publicIp = await getPublicIp();
        await writeToGoogleSheet(publicIp);
    }

    main();