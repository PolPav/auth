'use strict';
module.exports = (sequelize, DataTypes) => {
  var daily_stats = sequelize.define('dailyStats', {
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
  return daily_stats;
};
