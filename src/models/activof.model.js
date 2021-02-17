'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Activof extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Un activo fijo tiene varias descripciones de activos
      Activof.hasMany(models.Dactivo,{as:'dactivo',foreignKey:'activof_id'});
    }
  };
  Activof.init({
    activof: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Activof',
    tableName: 'activosf'
  });
  return Activof;
};