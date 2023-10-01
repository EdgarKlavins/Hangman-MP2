function simulateKeyPress(key) {
    // Create a new KeyboardEvent with the specified key.  Adapted from "https://javascript.info/keyboard-events"
    var event = new KeyboardEvent('keydown', {
      key: key,
      code: 'Key' + key,
      which: key.charCodeAt(0),
      keyCode: key.charCodeAt(0),
      charCode: key.charCodeAt(0),
    });
  
    // Dispatch the event to the window
    window.dispatchEvent(event);
  }

  module.exports = simulateKeyPress;