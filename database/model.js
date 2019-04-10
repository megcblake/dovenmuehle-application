const mongoose = require('./index');

const { Schema } = mongoose;

const ItemSchema = new Schema({
  item: String,
});

const ItemModel = mongoose.model('ItemModel', ItemSchema);

module.exports = ItemModel;
