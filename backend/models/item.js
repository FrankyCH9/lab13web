const mongoose = require('mongoose');


const itemSchema = new mongoose.Schema({
  image: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  
  // Otros campos que desees para tu modelo
});


module.exports = mongoose.model('Item', itemSchema);