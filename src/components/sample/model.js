const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = Schema({
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  isVisible: { type: Boolean, required: true, default: true },
  name: { type: String, required: true },
  description: { type: String, required: false },
});

const model = mongoose.model('sample', schema);

module.exports = model;
