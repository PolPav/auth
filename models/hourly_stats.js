'use strict';
module.exports = (sequelize, DataTypes) => {
  var hourly_stats = sequelize.define('hourlyStats', {
    userId: DataTypes.BIGINT,
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
  return hourly_stats;
};
