'use strict';
module.exports = (sequelize, DataTypes) => {
  var monthly_stats = sequelize.define('monthlyStats', {
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
  return monthly_stats;
};
