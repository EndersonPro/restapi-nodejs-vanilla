const http = require('http');
const url = require('url');

module.exports = class Server {
  constructor(host, port) {
    this.port = port;
    this.host = host;
    this.routeGet = [];
    this.routePost = [];
    this.routeDelete = [];
  }

  initServer(cb) {
    this.server = http.createServer((req, res) => {
      this.res = res;
      this.req = req;
      // this.res.statusCode = 200;
      this.res.setHeader('Content-Type', 'application/json');
      let reqUrl = url.parse(req.url, true);

      this.routeGet.forEach(({ path, callback }) => {
        if (path == reqUrl.path && req.method === 'GET') {
          callback(req, res);
        }
      });

      this.routePost.forEach(({ path, callback }) => {
        if (path == reqUrl.path && req.method === 'POST') {
          callback(req, res);
        }
      });

      this.routeDelete.forEach(({ path, callback }) => {
        if (reqUrl.path.match(path) && req.method === 'DELETE') {
          callback(req, res, reqUrl.path);
        }
      });
    });

    this.server.listen(this.port, cb(this.port, this.host));
  }

  toJson(data) {
    return JSON.stringify(data);
  }

  get(path, callback) {
    this.routeGet = [...this.routeGet, { path, callback }];
  }

  post(path, callback) {
    this.routePost = [...this.routePost, { path, callback }];
  }

  delete(path, callback) {
    this.routeDelete = [...this.routeDelete, { path, callback }];
  }
};
