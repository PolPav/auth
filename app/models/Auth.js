const Sequelize = require("sequelize");
const db = require("../config/db.js");

const Auth = db.module.define('auth', {

  userId: {
    type: Sequelize.INTEGER
  },

  login: {
    type: Sequelize.STRING
  },

  password: {
    type: Sequelize.STRING
  },

  token: {
    type: Sequelize.STRING
  }

});

module.exports = Auth;