'use strict';
module.exports = (sequelize, DataTypes) => {
  var categories = sequelize.define('categories', {
    name: DataTypes.STRING,
    pending: DataTypes.INTEGER,
    trash: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return categories;
};
