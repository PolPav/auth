'use strict';
module.exports = (sequelize, DataTypes) => {
  var rating_settings = sequelize.define('ratingSettings', {
    totalLikes: DataTypes.INTEGER,
    totalComments: DataTypes.INTEGER,
    totalFollowers: DataTypes.INTEGER,
    lastLikes: DataTypes.INTEGER,
    trash: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return rating_settings;
};
