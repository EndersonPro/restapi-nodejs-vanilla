const authServer = require('./authServer');
const Usuario = require('../models/Usuario.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


authServer.post('/login', (req, res) => {
  let body = '';

  req.on('data', data => {
    body += data;
  });

  req.on('end', () => {
    let { email, password } = JSON.parse(body);
    Usuario.findOne({ email }, (err, usuario) => {
      if (err) {
        res.statusCode = 400;
        return res.end(
          JSON.stringify({
            err: err
          })
        );
      }
      if (!usuario) {
        res.statusCode = 400;

        return res.end(
          JSON.stringify({
            err: 'Usuario o contraseña incorrectos'
          })
        );
      }
      if (!bcrypt.compareSync(password, usuario.password)) {
        res.statusCode = 400;
        return res.end(
          JSON.stringify({
            err: 'Usuario o contraseña incorrectos'
          })
        );
      }
      let token = jwt.sign(
        { usuario },
        'miclavesuperprosecretaquenadiesabexD',
        { expiresIn: 60 * 60 * 24 * 2 }
      );
      res.end(
        JSON.stringify({
          usuario,
          token
        })
      );
    });
  });
});

module.exports = authServer;
