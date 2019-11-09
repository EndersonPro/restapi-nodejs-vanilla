/**
 *  Clase manejadora de los eventos de errores
 *
 * @class ErrorHandler
 * @extends {Error}
 */
class ErrorHandler extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * Manejador de errores personalizados para los errores de metodos no soportados
 *
 * @class MethodNotAllowed
 * @extends {ErrorHandler}
 */
class MethodNotAllowed extends ErrorHandler {
  constructor() {
    super();
    this.data = { error: 'Metodo no permitido' };
  }
}




/**
 * Error al guardar en mongoDB
 *
 * @class MongoSaveError
 * @extends {ErrorHandler}
 */
class MongoSaveError extends ErrorHandler {
  constructor() {
    super();
    this.data = { error: 'Ocurrio un error al guardar en la base de datos' };
  }
}

module.exports = { MongoSaveError, MethodNotAllowed };
