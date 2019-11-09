const Server = require('../app/Server');
const mode = require('../app/env');
const envRegistro = require('./resgistroEnv');

let currentMode = mode();

const serverRegistro = new Server(
  envRegistro[currentMode].host,
  envRegistro[currentMode].port
);

module.exports = serverRegistro;
