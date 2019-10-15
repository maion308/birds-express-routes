'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bird = sequelize.define('Bird', {
    type: DataTypes.STRING,
    city: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Bird.associate = function(models) {
    // associations can be defined here
  };
  return Bird;
};