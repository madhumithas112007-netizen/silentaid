# 🆘 SilentAid
### Emergency Communication for Speech & Hearing Impaired

> *"A voice for those who have none — Beyond Barriers"*

Built for **Confluence 2.0 Hackathon** — Open Innovation Track  
**Team:** Madhumitha S & Maanusri J  
**College:** V.S.B. College of Engineering & Technical Campus, Coimbatore

---

## 🔥 The Problem
- 63 lakh+ people in India have speech/hearing disabilities
- In emergencies, they cannot communicate with bystanders or responders
- Existing apps require internet — useless in rural/low-signal areas
- No fast, simple, offline tool exists for this gap

---

## ✅ Our Solution
**SilentAid** is an installable web app (PWA) — works like a native app, no app store needed.

| Feature | Description |
|---|---|
| 🃏 Emergency Cards | 10 visual cards — Pain, Help, Medicine, Breathing, Contact |
| 🏥 Medical Profile | Blood group, allergies, emergency contacts stored securely |
| 🌐 Tamil & English | Switch languages instantly with one button |
| 📴 Offline First | Works with zero internet, always ready |
| 🔒 End-to-End Encrypted | Medical data encrypted via Web Crypto API — never stored in plaintext |
| 📲 Installable | Add to home screen on any Android or iPhone — no app store needed |

---

## ⭐ SilentSOS — Our Star Feature
> Shake phone **3 times** →  
> ✅ Full screen red emergency card appears  
> ✅ Loud alarm activates automatically  
> ✅ Medical info displayed instantly  
> ✅ Emergency contact shown on screen  

**No tapping. No unlocking. No delay. Just shake — and help comes.**

---

## 🔐 Security & Encryption
- **Web Crypto API (AES-256-GCM)** — browser-native military-grade encryption
- Medical data encrypted **before** being saved to localStorage — zero plaintext ever stored
- Encryption key generated uniquely **per device** using `crypto.getRandomValues()`
- GCM mode provides **tamper detection** — detects if stored data is modified
- **No server, no cloud** — data never leaves the device

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML5, CSS3, JavaScript (ES6+) |
| Icons | FontAwesome Icons |
| Backend / Runtime | Node.js (via Replit) |
| Storage | Web Storage API (localStorage) |
| Encryption | Web Crypto API (AES-256-GCM) |
| Shake Detection | DeviceMotionEvent API (Accelerometer) |
| Installable | Progressive Web App (PWA) |
| Hosting | Replit |

---

## 🚀 How to Run
```bash
git clone https://github.com/madhumithas112007-netizen/silentaid.git
cd silentaid
npm install
node server.js
```
Open `http://localhost:3000` in your browser.

Or visit the **live demo:** `[your Replit link here]`

---

## 🌍 Impact
- 63 lakh speech/hearing impaired people gain emergency communication
- Works in rural areas with zero internet
- Free forever — no subscription, no login required
- Scalable to all Indian languages

---

## 🔮 Future Scope
- SOS SMS Broadcast via Twilio API
- AI Smart Card Suggestion based on medical profile
- QR Medical Card — printable, stick on wheelchair or bag
- ASHA Worker Portal for community health workers
- Hindi, Telugu, Kannada, Malayalam expansion

---

## 📄 License
MIT License — free to use and build upon.
