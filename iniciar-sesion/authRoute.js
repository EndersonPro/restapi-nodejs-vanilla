const authServer = require('./authServer');

authServer.post('/login', (req, res) => {
  res.end(
    JSON.stringify({
      auth: 'auth'
    })
  );
});

module.exports = authServer;
