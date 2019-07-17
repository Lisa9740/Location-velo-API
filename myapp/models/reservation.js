'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reservation = sequelize.define('Reservation', {
    debut: DataTypes.DATE,
    fin: DataTypes.DATE
  }, {});
  Reservation.associate = function(models) {
 
        Reservation.belongsTo ( models.User,{ foreignKey : "userID", targetKey : "id", onDelete: 'CASCADE'});
       
  };
  return Reservation;
};