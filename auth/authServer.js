const Server = require('../app/Server');
const mode = require('../app/env');
const envAuth = require('./envAuth');

let currentMode = mode();

const authServer = new Server(
  envAuth[currentMode].host,
  envAuth[currentMode].port
);

module.exports = authServer;
