'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('articulos', [
      {
        codigo: "H-1.1TAB.CAM-",
        color: "VARIOS COLORES",
        marca: "",
        serie: "",
        anio_c: "2021-02-24",
        valor_c: "0",
        estado_id: "1",
        ubicacion_id: "1",
        dactivo_id: "2"
      },
      {
        codigo: "SE-1-ARCHI-1",
        color: "PLOMO",
        marca: "N/A",
        serie: "N/A",
        anio_c: "2021-02-15",
        valor_c: "60",
        estado_id: 1,
        ubicacion_id: "1",
        dactivo_id: "2"
      },
      {
        codigo: "SE-1-ARCHI-2",
        color: "CAOVA Y NEGRO",
        marca: "N/A",
        serie: "N/A",
        anio_c: "2021-02-15",
        valor_c: "0",
        estado_id: 1,
        ubicacion_id: "1",
        dactivo_id: "2"
      },
      {
        codigo: "C-1-ARCHI-3",
        color: "GRIS",
        marca: "N/A",
        serie: "N/A",
        anio_c: "2021-02-15",
        valor_c: "0",
        estado_id: 1,
        ubicacion_id: "1",
        dactivo_id: "2"
      },
      {
        codigo: "SE-1-ARCHI-4",
        color: "GRIS",
        marca: "METAL",
        serie: "0001111",
        anio_c: "2021-02-15",
        valor_c: "0",
        estado_id: 1,
        ubicacion_id: "1",
        dactivo_id: "2"
      },
      {
        codigo: "SE-1-ARCHI-5",
        color: "GRIS",
        marca: "PIKA",
        serie: "011110000",
        anio_c: "2021-02-15",
        valor_c: "0",
        estado_id: 1,
        ubicacion_id: 2,
        dactivo_id: 1
      },
      {
        codigo: "SE-1-ARCHI-6",
        color: "GRIS",
        marca: "PIKA",
        serie: "011110000",
        anio_c: "2021-02-15",
        valor_c: "10.55",
        estado_id: 1,
        ubicacion_id: 2,
        dactivo_id: 1
      },
      {
        codigo: "SE-1-ARCHI-7",
        color: "GRIS",
        marca: "PIKA",
        serie: "011110000",
        anio_c: "2021-02-15",
        valor_c: "10.55",
        estado_id: 1,
        ubicacion_id: 2,
        dactivo_id: 1
      },
      {
        codigo: "SE-1-ARCHI-8",
        color: "GRIS",
        marca: "PIKA",
        serie: "011110000",
        anio_c: "2021-02-15",
        valor_c: "10.55",
        estado_id: 1,
        ubicacion_id: 2,
        dactivo_id: 1
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
