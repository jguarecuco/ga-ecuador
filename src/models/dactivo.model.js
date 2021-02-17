'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dactivo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Varios descripciones de activos tienen un activo fijo
      Dactivo.belongsTo(models.Activof,{as:'activo',foreignKey:'activof_id'});
      // Una descripcion de activo tiene varios articulos
      Dactivo.hasMany(models.Articulo,{as:'articulo',foreignKey:'dactivo_id'});
    }
  };
  Dactivo.init({
    codigo: DataTypes.STRING,
    descripcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Dactivo',
    tableName: 'dactivos'
  });
  return Dactivo;
};