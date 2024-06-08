const mongoose = require('mongoose');

const RecepieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  instructions: {
    type: [String],
    required: true,
  },
  ingredients: {
    type: { name: String, amount: Number },
    required: true,
  },
});
/**
 * @typedef Recepie
 */
const Recepie = mongoose.model('Recepie', RecepieSchema);
module.exports = Recepie;
