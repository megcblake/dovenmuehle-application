const StringModel = require('./model');

const saveString = (string, callback) => {
  StringModel.create(string, callback);
};

const retrieveStrings = callback => {
  StringModel.find({}, callback);
};

module.exports = {
  saveString,
  retrieveStrings,
};
