'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

   var foreign_keys = [];

   // Cle bassin_id

   foreign_keys.push(queryInterface.addColumn(

     'Velos',
     'reservationID',
     {
       type: Sequelize.INTEGER,
       references: {
         model: 'Reservations',
         key: 'id'
       },
       onUpdate: 'CASCADE',
       onDelete: 'CASCADE'
     },

   ));



  

   return Promise.all(foreign_keys);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */

   let foreign_keys = [];
   foreign_keys.push(queryInterface.removeColumn('Velos', 'reservationID', Sequelize.INTEGER));
   return Promise.all(foreign_keys);
  }
};
