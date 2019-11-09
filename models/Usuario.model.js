const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let rolesValidos = {
  values: ['ADMIN_ROLE', 'USER_ROLE'],
  message: '{VALUE}, no es un rol valido'
};


let usuarioSchema = new Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre es necesario']
  },
  password: {
    type: String,
    required: [true, 'La contraseña es obligatoria']
  },
  role: {
    type: String,
    default: 'USER_ROLE',
    enum: rolesValidos
  }
});

usuarioSchema.methods.toJSON = function() {
  let user = this;
  let userObject = user.toObject();
  delete userObject.password;
  return userObject;
};

module.exports = mongoose.model('Usuario', usuarioSchema);
