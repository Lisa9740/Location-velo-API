'use strict';
module.exports = (sequelize, DataTypes) => {
  const Parcours = sequelize.define('Parcours', {
    longitude: DataTypes.FLOAT,
    latitude: DataTypes.FLOAT,
    secteur: DataTypes.STRING,
    lieu: DataTypes.STRING
  }, {});
  Parcours.associate = function(models) {
    // associations can be defined here
  };
  return Parcours;
};