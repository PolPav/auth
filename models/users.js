'use strict';
module.exports = (sequelize, DataTypes) => {
  var users = sequelize.define('users', {
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    pending: DataTypes.INTEGER,
    categoryId: DataTypes.BIGINT,
    calculateRating: DataTypes.INTEGER,
    trash: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return users;
};
