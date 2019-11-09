const assert = require('assert');
const supertestRequest = require('supertest');
const envHistorial = require('../historial/envHistorial.js');
const envRegistro = require('../registro/resgistroEnv');

describe('Probando Servicio HISTORIAL palabras Palindrome', () => {
  var request = supertestRequest(
    `http://${envHistorial.local.host}:${envHistorial.local.port}`
  );
  describe('GET', function() {
    it('Solicitando la lista de palabras palindrome', done => {
      request
        .get('/historial')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });

  describe('PUT', function() {
    it('No Permitiendo actualizacion de un registro de la lista de palabras', done => {
      request
        .put('/historial/iddelregistro')
        .expect('Content-Type', /json/)
        .expect(405, done);
    });
  });
});

describe('Probando servicio REGISTRO', function() {
  describe('POST', function() {
    it('Registrando un usuario', done => {
      var request = supertestRequest(
        `http://${envRegistro.local.host}:${envRegistro.local.port}`
      );
      let nuevoUsuario = {
        nombre: 'Enderson_test',
        email: 'email@test.com',
        password: 'test',
        role: 'USER_ROLE'
      };
      request
        .post('/register')
        .send(nuevoUsuario)
        .expect(201, done);
    });
  });
});
