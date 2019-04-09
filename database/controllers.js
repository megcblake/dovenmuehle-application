const StringModel = require('./model');

const saveItem = (string, callback) => {
  StringModel.create({ item: string }, callback);
};

const fetchItems = callback => {
  StringModel.find({}, callback);
};

module.exports = {
  saveItem,
  fetchItems,
};
