'use strict';
module.exports = (sequelize, DataTypes) => {
  const Velo = sequelize.define('Velo', {
    label: DataTypes.STRING
  }, {});
  Velo.associate = function(models) {
    Velo.hasOne (models.Reservation, {foreignKey : "reservationID", targetKey: "id", onDelete : 'CASCADE'})
  };
  return Velo;
};