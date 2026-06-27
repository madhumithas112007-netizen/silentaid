const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// SMS proxy endpoint (uses Twilio if env vars set, else returns sms: link)
app.post('/api/send-sos', async (req, res) => {
  const { contacts, message } = req.body;

  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const fromNumber = process.env.TWILIO_PHONE_NUMBER;

  if (!accountSid || !authToken || !fromNumber) {
    // Fallback: tell client to use sms: links
    return res.json({ success: false, fallback: true, contacts, message });
  }

  try {
    const twilio = require('twilio')(accountSid, authToken);
    const results = [];
    for (const contact of contacts) {
      if (!contact.phone) continue;
      try {
        const msg = await twilio.messages.create({
          body: message,
          from: fromNumber,
          to: contact.phone
        });
        results.push({ phone: contact.phone, sid: msg.sid, success: true });
      } catch (e) {
        results.push({ phone: contact.phone, success: false, error: e.message });
      }
    }
    res.json({ success: true, results });
  } catch (e) {
    res.status(500).json({ success: false, error: e.message });
  }
});

// Serve SW at root scope
app.get('/sw.js', (req, res) => {
  res.set('Service-Worker-Allowed', '/');
  res.sendFile(path.join(__dirname, 'public', 'sw.js'));
});

// All routes → index.html (SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`SilentAid running on port ${PORT}`);
});
