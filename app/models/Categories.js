const Sequelize = require("sequelize");
const db = require("../config/db.js");

const Categories = db.module.define('categories', {

  name: {
    type: Sequelize.STRING
  },

  pending: {
    type: Sequelize.INTEGER
  },

  trash: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },

});

module.exports = Categories;
