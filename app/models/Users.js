const Sequelize = require("sequelize");
const db = require("../config/db.js");
const DailyStats = require("./DailyStats");
const HourlyStats = require("./HourlyStats");
const MonthlyStats = require("./MonthlyStats");

const User = db.module.define('user', {

  name: {
    type: Sequelize.STRING
  },

  surname: {
    type: Sequelize.STRING
  },

  pending: {
    type: Sequelize.INTEGER
  },

  categoryId: {
    type: Sequelize.BIGINT
  },

  calculateRating: {
    type: Sequelize.INTEGER
  },

  trash: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }

});

User.hasOne(DailyStats);
DailyStats.belongsTo(User);

User.hasOne(HourlyStats);
HourlyStats.belongsTo(User);

User.hasOne(MonthlyStats);
MonthlyStats.belongsTo(User);

module.exports = User;
