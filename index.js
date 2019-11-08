const Server = require('./app/Server');
const serverPalindrome = require('./palindrome/serverPalindrome');
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
  console.log(`Servidor PALINDROME corriendo en ${port} y host ${host}`)
);
