const Server = require('../app/Server');
const mode = require('../app/env');
const envPalindrome = require('./envPalindrome');

let currentMode = mode();

const serverPalindrome = new Server(
  envPalindrome[currentMode].host,
  envPalindrome[currentMode].port
);

module.exports = serverPalindrome;
