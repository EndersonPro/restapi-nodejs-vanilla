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
  const body = '';
  req.on('data', function(data) {
    body += data;
    console.log(data);
  });

  //   const { msg } = JSON.parse(body);

  //   console.log(msg);
  console.log(body);
  //   res.end({ msg });
});

server.initServer((port, host) =>
  console.log(`Servidor corriendo en el host ${host} puerto ${port}`)
);
