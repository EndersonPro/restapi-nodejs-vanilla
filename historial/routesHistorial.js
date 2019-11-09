const serverHistorial = require('./historialServer');
const Palabra = require('../models/Palabra.model');
const jwt = require('jsonwebtoken');

serverHistorial.get('/historial', (req, res) => {
  Palabra.find({ active: true })
    .then(palabras => {
      return res.end(
        JSON.stringify({
          data: palabras
        })
      );
    })
    .catch(err => {
      return res.end(
        JSON.stringify({
          data: [],
          error: err
        })
      );
    });
});

serverHistorial.delete(/\/historial\/.*/, async (req, res, path) => {
  // console.log(path.spl)c
  const _token = req.headers['x-access-token'] || req.headers['authorization'];
  const token = _token.split(' ')[1];
  const { usuario } = jwt.verify(token, 'miclavesuperprosecretaquenadiesabexD');

  if (usuario.role === 'ADMIN_ROLE') {
    const id = path.trim().split('/')[2];
    Palabra.findOne({ _id: id, active: true }, (err, palabra) => {
      if (err) {
        res.statusCode = 400;
        return res.end(
          JSON.stringify({
            error: err
          })
        );
      }

      if (!palabra) {
        res.statusCode = 400;
        return res.end(
          JSON.stringify({
            message: 'Palabra no existe'
          })
        );
      }

      palabra.active = false;

      palabra.save((err, palabraBorrada) => {
        if (err) {
          res.statusCode = 500;
          return res.end(
            JSON.stringify({
              error: err
            })
          );
        }
        return res.end(
          JSON.stringify({
            data: {
              palabra: palabraBorrada
            },
            message: 'Palabra borrada'
          })
        );
      });
    });
  } else {
    return res.end(
      JSON.stringify({
        error: 'Usted no tiene permisos para realizar esta acción'
      })
    );
  }
});

module.exports = serverHistorial;
