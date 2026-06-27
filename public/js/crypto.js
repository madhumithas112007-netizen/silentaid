let cryptoKey = null;

async function getCryptoKey() {
  if (cryptoKey) return cryptoKey;
  // A secure salt phrase used to derive our local device key
  const baseKey = new TextEncoder().encode("silentaid-super-secure-local-key-passphrase-2026");
  const hash = await crypto.subtle.digest("SHA-256", baseKey);
  cryptoKey = await crypto.subtle.importKey("raw", hash, { name: "AES-GCM" }, false, ["encrypt", "decrypt"]);
  return cryptoKey;
}

async function encryptData(text) {
  const key = await getCryptoKey();
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const encoded = new TextEncoder().encode(text);
  const encrypted = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, encoded);
  return {
    ciphertext: btoa(String.fromCharCode(...new Uint8Array(encrypted))),
    iv: btoa(String.fromCharCode(...iv))
  };
}

async function decryptData(obj) {
  try {
    const key = await getCryptoKey();
    const iv = new Uint8Array(atob(obj.iv).split("").map(c => c.charCodeAt(0)));
    const ciphertext = new Uint8Array(atob(obj.ciphertext).split("").map(c => c.charCodeAt(0)));
    const decrypted = await crypto.subtle.decrypt({ name: "AES-GCM", iv }, key, ciphertext);
    return new TextDecoder().decode(decrypted);
  } catch (e) {
    console.error("Decryption failed", e);
    return null;
  }
}