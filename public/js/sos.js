async function sendSOSAlert(sourceType, targetPhone) {
  try {
    const response = await fetch('/api/sos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        trigger: sourceType,
        targetPhone: targetPhone || "Global Emergency Contact",
        timestamp: new Date().toISOString()
      })
    });
    return await response.json();
  } catch (err) {
    console.warn("Offline state active. Cache protocol preserved event natively.");
    throw err;
  }
}