'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('ubicaciones', [
      {
        codigo: "BT-1",
        descripcion: "BAÑO TERCER PISO"
      },
      {
        codigo: "C.1.1",
        descripcion: "CONTABILIDAD"
      },
      {
        codigo: "SE-1",
        descripcion: "SALÓN DE ACTOS"
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
