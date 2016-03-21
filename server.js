// Import node modules
var osc = require('node-osc');

// Muse-io is a program that gets the data from the muse
// and sends it to port 5000 on localhost (127.0.0.1), your own computers IP adress
var oscServer = new osc.Server(5000, '127.0.0.1');

// This should print every eeg message, please look at the README to see how OSC paths work.
oscServer.on("/muse/eeg", function (message) {
  // The message should only be availible in this scope
  console.log(message);
});