const ItemModel = require('./model');

const saveItem = (item, callback) => {
  ItemModel.create({ item }, callback);
};

const fetchItems = callback => {
  ItemModel.find({}, callback);
};

module.exports = {
  saveItem,
  fetchItems,
};
