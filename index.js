const serverPalindrome = require('./palindrome/routesPalindrome');
const serverHistorial = require('./historial/routesHistorial');
const authServer = require('./auth/authRoute');
const registerServer = require('./registro/registroRoutes');

const mongoose = require('mongoose');

try {
  mongoose
    .connect('mongodb://localhost:27017/pruebaback', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => {
      console.log('Base de datos conectada');
    });
} catch (err) {
  throw new Error(err);
}

serverPalindrome.initServer((port, host) =>
  console.log(`Servidor [PALINDROME] corriendo en ${port} y host ${host}`)
);

serverHistorial.initServer((port, host) =>
  console.log(`Servidor [HISTORIAL] corriendo en ${port} y host ${host}`)
);

authServer.initServer((port, host) => {
  console.log(`Servidor [AUTH] corriendo en ${port} y host ${host}`);
});

registerServer.initServer((port, host) => {
  console.log(`Servidor [REGISTER] corriendo en ${port} y host ${host}`);
});
