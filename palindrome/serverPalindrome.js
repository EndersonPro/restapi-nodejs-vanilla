const Server = require('../app/Server');
const mode = require('../app/env');

const enviroments = {
  prod: {},
  dev: {
    port: 9000,
    host: '127.0.0.1'
  }
};
let currentMode = mode();

const serverPalindrome = new Server(
  enviroments[currentMode].host,
  enviroments[currentMode].port
);

module.exports = serverPalindrome;
