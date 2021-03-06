const http = require('http');
const url = require('url');

/**
 *  Clase principal para instanciar y crear los demas servidores
 *
 * @class Server
 */
class Server {
  /**
   *  Creando una instancia de servidor
   * @param {*} host El host del servidor
   * @param {*} port El puerto en el que correra el servidor
   * @memberof Server
   */
  constructor(host, port) {
    this.port = port;
    this.host = host;
    this.routeGet = [];
    this.routePost = [];
    this.routeDelete = [];
    this.routePut = [];
  }

  /**
   *Metodo para inicializar el servidor
   *
   * @param {*} cb Callback que será llamado inmedatamente el servidor este corriendo.
   * @memberof Server
   */
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

      this.routePut.forEach(({ path, callback }) => {
        if (reqUrl.path.match(path) && req.method === 'PUT') {
          callback(req, res, reqUrl.path);
        }
      });
    });

    this.server.listen(this.port, cb(this.port, this.host));
  }

  /**
   *  Metodo para crear una ruta de tipo GET
   *
   * @param {*} path Ruta tipo GET
   * @param {*} callback Metodo en el que se puede procesar la informacion
   * @memberof Server
   */
  get(path, callback) {
    this.routeGet = [...this.routeGet, { path, callback }];
  }

  /**
   *  Metodo para crear rutas de tipo POST
   *
   * @param {*} path Ruta tipo POST
   * @param {*} callback Metodo en el que se puede procesar la informacion
   * @memberof Server
   */
  post(path, callback) {
    this.routePost = [...this.routePost, { path, callback }];
  }

  /**
   *Metodo para crear rutas de tipo DELETE
   *
   * @param {*} path Ruta tipo POST
   * @param {*} callback Metodo en el que se puede procesar la informacion
   * @memberof Server
   */
  delete(path, callback) {
    this.routeDelete = [...this.routeDelete, { path, callback }];
  }

  /**
   *Metodo para crear rutas de tipo PUT
   *
   * @param {*} path Ruta tipo PUT
   * @param {*} callback Metodo en el que se puede procesar la informacion
   * @memberof Server
   */
  put(path, callback) {
    this.routePut = [...this.routePut, { path, callback }];
  }
}

module.exports = Server;
