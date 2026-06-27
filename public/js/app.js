const i18n = {
  en: {
    langBtn: "தமிழ்",
    shakeActive: "Shake SOS active — shake 3x to trigger emergency",
    cardPain: "Pain", cardHelp: "Help", cardMedicine: "Medicine", cardBreathing: "Breathing",
    cardWater: "Water", cardAmbulance: "Ambulance", cardPolice: "Police", cardToilet: "Toilet", cardContact: "Contact",
    profileTitle: "Medical Profile", profileDesc: "Update configuration. Encrypted client-side dynamically.",
    lblFullName: "Full Name", lblBloodGroup: "Blood Group", lblAllergies: "Allergies", lblEmergContact: "Emergency Contact",
    lblContactName: "Contact Name", lblContactPhone: "Contact Phone", lblMedConditions: "Medical Conditions", btnSave: "Save Profile",
    toastSaved: "Profile encrypted locally via AES-256!", toastTriggered: "SOS Dispatched: ",
    lblMainContactTitle: "Primary Emergency Contact", popTitle: "Emergency Medical Info",
    popLblName: "Patient Name", popLblBlood: "Blood Group", popLblAllergies: "Allergies", 
    popLblConditions: "Medical Conditions", popLblContact: "Call Emergency Contact",
    txtLockDesc: "Enter password passcode validation rules to edit values.",
    wrongPass: "Incorrect Security Code!", unlockedMsg: "Settings Unlocked!"
  },
  ta: {
    langBtn: "English",
    shakeActive: "அவசர குலுக்கல் தயார் — தூண்ட 3 முறை குலுக்கவும்",
    cardPain: "வலி", cardHelp: "உதவி", cardMedicine: "மருந்து", cardBreathing: "சுவாசம்",
    cardWater: "தண்ணீர்", cardAmbulance: "ஆம்புலன்ஸ்", cardPolice: "காவல்துறை", cardToilet: "கழிப்பறை", cardContact: "தொடர்பு",
    profileTitle: "மருத்துவ சுயவிவரம்", profileDesc: "சுயவிவர மாற்றங்களைச் செய்யவும். சாதனத்தில் பாதுகாப்பாக குறியாக்கம் செய்யப்படுகிறது.",
    lblFullName: "முழு பெயர்", lblBloodGroup: "இரத்த வகை", lblAllergies: "ஒவ்வாமை", lblEmergContact: "அவசரகால தொடர்பு",
    lblContactName: "தொடர்பு பெயர்", lblContactPhone: "தொடர்பு எண்", lblMedConditions: "மருத்துவ நிலைகள்", btnSave: "சுயவிவரத்தை சேமி",
    toastSaved: "சுயவிவரம் AES-256 மூலம் பாதுகாப்பாக சேமிக்கப்பட்டது!", toastTriggered: "அவசர எச்சரிக்கை அனுப்பப்பட்டது: ",
    lblMainContactTitle: "முக்கிய அவசரகால தொடர்பு", popTitle: "அவசர மருத்துவ தகவல்",
    popLblName: "நோயாளி பெயர்", popLblBlood: "இரத்த வகை", popLblAllergies: "ஒவ்வாமை", 
    popLblConditions: "மருத்துவ நிலைகள்", popLblContact: "அவசரகால தொடர்பை அழைக்கவும்",
    txtLockDesc: "சுயவிவர சான்றுகளை மாற்றுவதற்கு கடவுச்சொல்லை உள்ளிடவும்.",
    wrongPass: "தவறான பாதுகாப்பு குறியீடு!", unlockedMsg: "அமைப்புகள் திறக்கப்பட்டன!"
  }
};

let currentLang = 'en';
const ACCESS_PASSCODE = "1234";

const overlayConfigs = {
  'Pain': { content: '🤕', color: '#ef4444' },
  'Help': { content: '✋', color: '#f59e0b' },
  'Medicine': { content: '💊', color: '#3b82f6' },
  'Breathing': { content: '🫁', color: '#10b981' },
  'Water': { content: '💧', color: '#06b6d4' },
  'Ambulance': { content: '🚑', color: '#b91c1c' },
  'Police': { content: '👮', color: '#1e3a8a' },
  'Toilet': { content: '🚾', color: '#64748b' },
  'Emergency Contact': { content: '📞', color: '#047857' }
};

function toggleLanguage() {
  currentLang = (currentLang === 'en') ? 'ta' : 'en';
  applyTranslations();
}

function applyTranslations() {
  document.getElementById('lang-toggle-btn').innerText = i18n[currentLang].langBtn;
  document.getElementById('shake-status-text').innerText = i18n[currentLang].shakeActive;
  
  document.getElementById('txt-card-pain').innerText = i18n[currentLang].cardPain;
  document.getElementById('txt-card-help').innerText = i18n[currentLang].cardHelp;
  document.getElementById('txt-card-medicine').innerText = i18n[currentLang].cardMedicine;
  document.getElementById('txt-card-breathing').innerText = i18n[currentLang].cardBreathing;
  document.getElementById('txt-card-water').innerText = i18n[currentLang].cardWater;
  document.getElementById('txt-card-ambulance').innerText = i18n[currentLang].cardAmbulance;
  document.getElementById('txt-card-police').innerText = i18n[currentLang].cardPolice;
  document.getElementById('txt-card-toilet').innerText = i18n[currentLang].cardToilet;
  document.getElementById('txt-card-contact').innerText = i18n[currentLang].cardContact;
  
  document.getElementById('lbl-main-contact-title').innerText = i18n[currentLang].lblMainContactTitle;
  document.getElementById('txt-profile-title').innerText = i18n[currentLang].profileTitle;
  document.getElementById('txt-lock-desc').innerText = i18n[currentLang].txtLockDesc;
  document.getElementById('txt-profile-desc').innerText = i18n[currentLang].profileDesc;
  document.getElementById('lbl-fullname').innerText = i18n[currentLang].lblFullName;
  document.getElementById('lbl-bloodgroup').innerText = i18n[currentLang].lblBloodGroup;
  document.getElementById('lbl-allergies').innerText = i18n[currentLang].lblAllergies;
  document.getElementById('lbl-emergcontact').innerText = i18n[currentLang].lblEmergContact;
  document.getElementById('lbl-contactname').innerText = i18n[currentLang].lblContactName;
  document.getElementById('lbl-contactphone').innerText = i18n[currentLang].lblContactPhone;
  document.getElementById('lbl-medconditions').innerText = i18n[currentLang].lblMedConditions;

  document.getElementById('pop-title').innerText = i18n[currentLang].popTitle;
  document.getElementById('pop-lbl-name').innerText = i18n[currentLang].popLblName;
  document.getElementById('pop-lbl-blood').innerText = i18n[currentLang].popLblBlood;
  document.getElementById('pop-lbl-allergies').innerText = i18n[currentLang].popLblAllergies;
  document.getElementById('pop-lbl-conditions').innerText = i18n[currentLang].popLblConditions;
  document.getElementById('pop-lbl-contact').innerText = i18n[currentLang].popLblContact;
  
  // Update landing text string conditionally
  loadProfileData().then(data => updateMainContactWidget(data));
}

/* 🔐 Management Dialog Box Interface Logic */
function openUnlockDialog() {
  document.getElementById('password-lock-box').style.display = 'block';
  document.getElementById('profile-inputs-form').style.display = 'none';
  document.getElementById('settings-modal').style.display = 'flex';
}

function verifyManagementPasscode() {
  const entered = document.getElementById('input-lock-password').value;
  if (entered === ACCESS_PASSCODE) {
    document.getElementById('password-lock-box').style.display = 'none';
    document.getElementById('profile-inputs-form').style.display = 'block';
    document.getElementById('input-lock-password').value = '';
    showToast(i18n[currentLang].unlockedMsg);
  } else {
    showToast(i18n[currentLang].wrongPass);
  }
}

function closeManagementModal() {
  document.getElementById('settings-modal').style.display = 'none';
}

async function saveProfileData() {
  const profile = {
    fullName: document.getElementById('input-fullname').value,
    bloodGroup: document.getElementById('input-bloodgroup').value,
    allergies: document.getElementById('input-allergies').value,
    contactName: document.getElementById('input-contactname').value,
    contactPhone: document.getElementById('input-contactphone').value,
    conditions: document.getElementById('input-conditions').value
  };

  const encrypted = await encryptData(JSON.stringify(profile));
  localStorage.setItem('sa_secure_profile_data', JSON.stringify(encrypted));
  showToast(i18n[currentLang].toastSaved);
  updateMainContactWidget(profile);
  closeManagementModal();
}

async function loadProfileData() {
  const stored = localStorage.getItem('sa_secure_profile_data');
  if (!stored) return null;
  try {
    const encryptedObj = JSON.parse(stored);
    const decryptedText = await decryptData(encryptedObj);
    return JSON.parse(decryptedText);
  } catch (e) { return null; }
}

function updateMainContactWidget(data) {
  const el = document.getElementById('main-contact-display');
  if (data && data.contactName && data.contactPhone) {
    el.innerText = `${data.contactName} (${data.contactPhone})`;
  } else {
    el.innerText = currentLang === 'en' ? "No Contact Configured" : "தொடர்பு இல்லை";
  }
}

/* 🚨 Dynamic Emergency Display Controller Logic */
async function launchDistressOverlay(category, showMedicalInfo) {
  const config = overlayConfigs[category] || { content: '🚨', color: '#ef4444' };
  const overlay = document.getElementById('emergency-overlay');
  const circle = document.getElementById('overlay-circle');
  const label = document.getElementById('overlay-label');
  const medPopUp = document.getElementById('medical-popup-card');
  
  circle.innerText = config.content;
  circle.style.backgroundColor = config.color;
  
  const currentKey = 'card' + category.replace(' ', '');
  label.innerText = i18n[currentLang][currentKey] || category;
  label.style.color = config.color;

  // Enforce specific action popup layout visibility rules
  if (showMedicalInfo) {
    const data = await loadProfileData();
    if (data) {
      document.getElementById('pop-val-name').innerText = data.fullName || '--';
      document.getElementById('pop-val-blood').innerText = data.bloodGroup || '--';
      document.getElementById('pop-val-allergies').innerText = data.allergies || '--';
      document.getElementById('pop-val-conditions').innerText = data.conditions || '--';
      document.getElementById('pop-val-contact').innerText = `${data.contactName || '--'} : ${data.contactPhone || '--'}`;
    }
    medPopUp.style.display = 'block';
  } else {
    medPopUp.style.display = 'none';
  }
  
  overlay.classList.add('active');
}

function closeEmergencyOverlay() {
  document.getElementById('emergency-overlay').classList.remove('active');
}

// Check Manual Clicks against whitelist properties
async function triggerManualSOS(categoryName) {
  const isEssential = (categoryName === 'Medicine' || categoryName === 'Breathing');
  launchDistressOverlay(categoryName, isEssential);
  
  showToast(`${i18n[currentLang].toastTriggered} ${categoryName.toUpperCase()}`);
  const data = await loadProfileData();
  await sendSOSAlert(categoryName, data ? data.contactPhone : '');
}

// Device hardware shake forces pop-up rules bypass
async function triggerShakeSOS() {
  launchDistressOverlay('Pain', true); 
  showToast(`${i18n[currentLang].toastTriggered} SHAKE DETECTED`);
  const data = await loadProfileData();
  await sendSOSAlert('Shake Emergency Trigger', data ? data.contactPhone : '');
}

window.addEventListener('DOMContentLoaded', async () => {
  const data = await loadProfileData();
  if (data) {
    document.getElementById('input-fullname').value = data.fullName || '';
    document.getElementById('input-bloodgroup').value = data.bloodGroup || '';
    document.getElementById('input-allergies').value = data.allergies || '';
    document.getElementById('input-contactname').value = data.contactName || '';
    document.getElementById('input-contactphone').value = data.contactPhone || '';
    document.getElementById('input-conditions').value = data.conditions || '';
    updateMainContactWidget(data);
  }
  
  applyTranslations();
  initShakeDetection(() => triggerShakeSOS()); 
});

function showToast(msg) {
  const t = document.getElementById('toast-bar');
  t.innerText = msg; t.classList.add('visible');
  setTimeout(() => t.classList.remove('visible'), 3500);
}