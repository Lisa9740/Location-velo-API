'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    nom: DataTypes.STRING,
    prenom: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasMany (models.Reservation, {foreignKey : "userID", as: "reservations", onDelete : 'CASCADE'})
  };
  return User;
};