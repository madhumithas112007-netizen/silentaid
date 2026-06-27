let shakeCount = 0;
let lastShakeTime = 0;
const SHAKE_THRESHOLD = 15; // Calibration sensitivity adjustment

function initShakeDetection(onShakeTriggered) {
  if (!window.DeviceMotionEvent) {
    console.log("Device motion sensor not supported on this device.");
    return;
  }

  function handleMotion(event) {
    const acc = event.accelerationIncludingGravity;
    if (!acc) return;
    
    // Simple delta force assessment vector calculation
    let speed = Math.abs(acc.x + acc.y + acc.z - 9.81); 
    if (speed > SHAKE_THRESHOLD) {
      const now = Date.now();
      if (now - lastShakeTime > 400) { // Prevents overlapping multi-counts for a single shake
        shakeCount++;
        lastShakeTime = now;
        if (shakeCount >= 3) {
          shakeCount = 0;
          onShakeTriggered('3-Shake Detection');
        }
      }
    }
  }

  // Request permission for iOS 13+ devices safely
  if (typeof DeviceMotionEvent.requestPermission === 'function') {
    window.addEventListener('click', () => {
      DeviceMotionEvent.requestPermission().then(res => {
        if (res === 'granted') window.addEventListener('devicemotion', handleMotion);
      });
    }, { once: true });
  } else {
    window.addEventListener('devicemotion', handleMotion);
  }
}