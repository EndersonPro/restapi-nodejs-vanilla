const registroServer = require('./registroServer');
const Usuario = require('../models/Usuario.model');
const bcrypt = require('bcryptjs');

registroServer.post('/register', (req, res) => {
  let body = '';

  req.on('data', data => {
    body += data;
  });

  req.on('end', () => {
    let { nombre, password, email, role } = JSON.parse(body);
    let usuario = new Usuario({
      nombre: nombre,
      email: email,
      password: password != null ? bcrypt.hashSync(password, 10) : null,
      role: role
    });
    usuario.save((err, usuarioDB) => {
      if (err) {
        res.statusCode = 400;
        return res.end(
          JSON.stringify({
            err: err
          })
        );
      }
      res.statusCode = 201;
      res.end(
        JSON.stringify({
          usuario: usuarioDB
        })
      );
    });
  });
});

module.exports = registroServer;
