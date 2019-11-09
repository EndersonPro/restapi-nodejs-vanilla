const registroServer = require('./registroServer');
const Usuario = require('../models/Usuario.model');
const jwt = require('jsonwebtoken');
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

registroServer.get('/login', (req, res) => {
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

module.exports = registroServer;
