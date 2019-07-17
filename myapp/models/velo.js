'use strict';
module.exports = (sequelize, DataTypes) => {
  const Velo = sequelize.define('Velo', {
    label: DataTypes.STRING
  }, {});
  Velo.associate = function(models) {
    // associations can be defined here
  };
  return Velo;
};