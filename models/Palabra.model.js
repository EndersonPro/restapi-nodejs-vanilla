const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let palabraSchema = new Schema({
  palabra: {
    type: String,
    required: [true, 'Palabra es requerida']
  },
  isPalindromo: {
    type: Boolean
  },
  active: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('Palabra', palabraSchema);
