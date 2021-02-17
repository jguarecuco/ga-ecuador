'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Nombres: {
        type: Sequelize.STRING
      },
      Apellidos: {
        type: Sequelize.STRING
      },
      Cedula: {
        type: Sequelize.STRING
      },
      Direccion: {
        type: Sequelize.STRING
      },
      Email: {
        type: Sequelize.STRING
      },
      Telefono: {
        type: Sequelize.STRING
      },
      Contraseña: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};