class ErrorHandler extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

class MongoSaveError extends ErrorHandler {
  constructor(error) {
    super('Ocurrio un error al guardar en la base de datos');
    this.data = { error: error };
  }
}

module.exports = { MongoSaveError };
