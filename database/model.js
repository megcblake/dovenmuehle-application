const mongoose = require('./index');

const StringSchema = new mongoose.Schema({
  string: String,
});

const StringModel = mongoose.model('StringModel', StringSchema);

module.exports = StringModel;
