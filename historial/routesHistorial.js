const serverHistorial = require('./historialServer');

serverHistorial.get('/testHistorial', (req, res) => {
  res.end(
    JSON.stringify({
      ok: 'testHistorial'
    })
  );
});

module.exports = serverHistorial;
