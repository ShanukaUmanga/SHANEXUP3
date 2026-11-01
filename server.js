const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ප්‍රධාන Dashboard පිටුව
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="si">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Queen-MD WhatsApp Bot Dashboard</title>
        <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #0f172a; color: #f8fafc; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
            .card { background: #1e293b; padding: 30px; border-radius: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.3); text-align: center; width: 100%; max-width: 400px; }
            h1 { color: #38bdf8; font-size: 24px; margin-bottom: 10px; }
            p { color: #94a3b8; font-size: 14px; margin-bottom: 20px; }
            .btn { display: block; width: 100%; padding: 12px; margin: 10px 0; background: #0284c7; color: white; border: none; border-radius: 6px; font-size: 16px; cursor: pointer; text-decoration: none; transition: 0.3s; box-sizing: border-box; }
            .btn:hover { background: #0369a1; }
            .status { margin-top: 15px; font-size: 13px; color: #22c55e; }
        </style>
    </head>
    <body>
        <div class="card">
            <h1>Queen-MD Bot</h1>
            <p>WhatsApp Multi-Device Bot Dashboard</p>
            <a href="/pair" class="btn">Get Pairing Code</a>
            <a href="/qr" class="btn" style="background: #0d9488;">Get QR Code</a>
            <div class="status">● Status: Active & Running</div>
        </div>
    </body>
    </html>
  `);
});

// Pairing Code ලබා දෙන පිටුව
app.get('/pair', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="si">
    <head>
        <meta charset="UTF-8">
        <title>Pairing Code - Queen-MD</title>
        <style>
            body { font-family: sans-serif; background: #0f172a; color: #fff; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
            .card { background: #1e293b; padding: 30px; border-radius: 12px; text-align: center; width: 350px; box-shadow: 0 10px 25px rgba(0,0,0,0.3); }
            input { width: 90%; padding: 10px; margin: 10px 0; border-radius: 5px; border: 1px solid #475569; background: #0f172a; color: #fff; font-size: 16px; box-sizing: border-box; }
            button { width: 100%; padding: 10px; background: #0284c7; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 16px; }
            button:hover { background: #0369a1; }
            a { color: #38bdf8; display: block; margin-top: 15px; text-decoration: none; }
        </style>
    </head>
    <body>
        <div class="card">
            <h2>WhatsApp Pairing Code</h2>
            <p style="font-size: 13px; color: #94a3b8;">Enter phone number with country code (e.g. 947xxxxxxxx)</p>
            <form action="/get-code" method="POST">
                <input type="text" name="phone" placeholder="94712345678" required>
                <button type="submit">Generate Code</button>
            </form>
            <a href="/">← Back to Dashboard</a>
        </div>
    </body>
    </html>
  `);
});

app.post('/get-code', (req, res) => {
  const phone = req.body.phone;
  res.send(`
    <!DOCTYPE html>
    <html lang="si">
    <head><meta charset="UTF-8"><title>Pairing Status</title></head>
    <body style="background:#0f172a;color:#fff;font-family:sans-serif;text-align:center;padding-top:80px;">
        <div style="background:#1e293b;padding:30px;border-radius:12px;display:inline-block;max-width:400px;box-shadow:0 10px 25px rgba(0,0,0,0.3);">
            <h3 style="color:#38bdf8;">Request Received for: ${phone}</h3>
            <p style="color:#cbd5e1;font-size:14px;">ඔබගේ දුරකථන අංකය සඳහා Pairing Code එක සැකසෙමින් පවතී. කෝඩ් එක බලාගැනීමට Render Dashboard එකේ <b>Logs</b> වෙත යන්න.</p>
            <a href="/" style="color:#38bdf8;text-decoration:none;display:inline-block;margin-top:15px;">← Home Page</a>
        </div>
    </body>
    </html>
  `);
});

// QR Code තොරතුරු පෙන්වන පිටුව
app.get('/qr', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="si">
    <head><meta charset="UTF-8"><title>QR Code Instructions</title></head>
    <body style="background:#0f172a;color:#fff;font-family:sans-serif;text-align:center;padding-top:80px;">
        <div style="background:#1e293b;padding:30px;border-radius:12px;display:inline-block;max-width:400px;box-shadow:0 10px 25px rgba(0,0,0,0.3);">
            <h3 style="color:#0d9488;">QR Code Authentication</h3>
            <p style="color:#cbd5e1;font-size:14px;">QR కోඩ් එක ස්කෑන් කිරීම සඳහා Render Dashboard එකේ ඇති <b>Logs</b> (Application Logs) වෙත යන්න. බොට් එක Restart වීමත් සමඟ QR కోඩ් එක ටර්මිනල් ලොග්ස් තුළ දිස්වනු ඇත.</p>
            <a href="/" style="color:#38bdf8;text-decoration:none;display:inline-block;margin-top:15px;">← Home Page</a>
        </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// බොට් කෝඩ් එක ක්‍රියාත්මක කිරීම
require('./index.js');
