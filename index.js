const Server = require('./Server');

const server = new Server('127.0.0.1', 9000);

server.initServer((port, host) =>
  console.log(`Servidor corriendo en el host ${host} puerto ${port}`)
);

// server.listen(9000, () => console.log('Servidor corriendo en el puerto 9000'));
