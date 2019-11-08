const http = require('http');
const url = require('url');

module.exports = class Server {
  constructor(host, port) {
    this.port = port;
    this.host = host;
  }

  initServer(cb) {
    this.server = http.createServer((req, res) => {
      const reqUrl = url.parse(req.url, true);
      if (reqUrl.pathname == '/' && req.method === 'GET') {
        console.log(
          'Request Type: ' + req.method + 'EndPoint ' + reqUrl.pathname
        );
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(
          JSON.stringify({
            data: 'OK'
          })
        );
      }
    });

    this.server.listen(this.port, cb(this.port, this.host));
  }
};
