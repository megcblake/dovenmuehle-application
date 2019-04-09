const mongoose = require('./index');

const { Schema } = mongoose;

const StringSchema = new Schema({
  item: String,
});

const StringModel = mongoose.model('StringModel', StringSchema);

module.exports = StringModel;
