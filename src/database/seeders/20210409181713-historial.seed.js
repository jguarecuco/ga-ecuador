'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('historiales', [
      {
        fecha: "2021-02-15",
        observacion: "",
        articulo_id: 1,
        origen_id: 2,
        destino_id: 3,
      },
      {
        fecha: "2021-02-15",
        observacion: "",
        articulo_id: 3,
        origen_id: 1,
        destino_id: 3,
      },
      {
        fecha: "2021-02-15",
        observacion: null,
        articulo_id: 3,
        origen_id: 3,
        destino_id: 2,
      },
      {
        fecha: "2021-02-15",
        observacion: "",
        articulo_id: 3,
        origen_id: 2,
        destino_id: 1,
      },
      {
        fecha: "2021-02-15",
        observacion: "Devuelto con daño en la pata",
        articulo_id: 1,
        origen_id: 3,
        destino_id: 2,
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
