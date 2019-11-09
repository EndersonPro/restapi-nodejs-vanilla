const Server = require('../app/Server');
const mode = require('../app/env');
const envHistorial = require('./envHistorial');

let currentMode = mode();

const serverHistorial = new Server(
  envHistorial[currentMode].host,
  envHistorial[currentMode].port
);

module.exports = serverHistorial;
