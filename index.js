const serverPalindrome = require('./palindrome/routesPalindrome');
const serverHistorial = require('./historial/routesHistorial');
const authServer = require('./iniciar-sesion/authRoute');
const mongoose = require('mongoose');

try {
  mongoose.connect('mongodb://localhost:27017/auth', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(()=>{
      console.log("Base de datos conectada");
  });
} catch (err) {
  throw new Error(err);
}
// const server = new Server('127.0.0.1', 9000);

// server.get('/', (req, res) => {
//   res.end(
//     JSON.stringify({
//       data: 'Funciona bro'
//     })
//   );
// });

// server.get('/otherRoute', (req, res) => {
//   res.end(
//     JSON.stringify({
//       data: 'Other Route'
//     })
//   );
// });

// server.post('/add', (req, res) => {
//   var body = '';
//   req.on('data', data => {
//     body += data;
//   });
//   req.on('end', () => {
//     let { msg } = JSON.parse(body);
//     res.end(JSON.stringify({ req: 'ok', msg: msg }));
//   });
// });

// server.initServer((port, host) =>
//   console.log(`Servidor corriendo en el host ${host} puerto ${port}`)
// );
serverPalindrome.initServer((port, host) =>
  console.log(`Servidor [PALINDROME] corriendo en ${port} y host ${host}`)
);

serverHistorial.initServer((port, host) =>
  console.log(`Servidor [HISTORIAL] corriendo en ${port} y host ${host}`)
);

authServer.initServer((port, host) => {
  console.log(`Servidor [AUTH] corriendo en ${port} y host ${host}`);
});
