const Server = require('./Server');
const server = new Server('127.0.0.1', 9000);

server.get('/', (req, res) => {
  res.end(
    JSON.stringify({
      data: 'Funciona bro'
    })
  );
});

server.get('/otherRoute', (req, res) => {
  res.end(
    JSON.stringify({
      data: 'Other Route'
    })
  );
});

server.post('/add', (req, res) => {
  //   console.log(req.body);
  var body = '';
  req.on('data', data => {
    body += data;
  });
  req.on('end', () => {
    let { msg } = JSON.parse(body);
    res.end(JSON.stringify({ req: 'ok', msg: msg }));
  });

  //   const data = JSON.parse(body);

  //   console.log(msg);
});

server.initServer((port, host) =>
  console.log(`Servidor corriendo en el host ${host} puerto ${port}`)
);
