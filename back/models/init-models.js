var DataTypes = require("sequelize").DataTypes;
var _bag = require("./bag");
var _coach_profile = require("./coach_profile");
var _condition = require("./condition");
var _news = require("./news");
var _reservation = require("./reservation");
var _user = require("./user");
var _user_resa = require("./user_resa");

function initModels(sequelize) {
  var bag = _bag(sequelize, DataTypes);
  var coach_profile = _coach_profile(sequelize, DataTypes);
  var condition = _condition(sequelize, DataTypes);
  var news = _news(sequelize, DataTypes);
  var reservation = _reservation(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);
  var user_resa = _user_resa(sequelize, DataTypes);


  return {
    bag,
    coach_profile,
    condition,
    news,
    reservation,
    user,
    user_resa,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
