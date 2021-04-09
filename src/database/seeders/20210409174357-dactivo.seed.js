'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('dactivos', [
      {
        codigo: "ARCHI",
        descripcion: "ARCHIVADOR",
        activof_id: 1,
      },
      {
        codigo: "COMPUTA",
        descripcion: "COMPUTADOR",
        activof_id: 2,
      },
      {
        codigo: "MICRO",
        descripcion: "MICROFONO",
        activof_id: 3,
      },
      {
        codigo: "MECA",
        descripcion: "MONITOR",
        activof_id: 2,
      },
      {
        codigo: "asd",
        descripcion: "PARLANTES",
        activof_id: 3,
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
