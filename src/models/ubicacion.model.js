'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ubicacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Ubicacion.hasMany(models.Articulo,{as:'articulo',foreignKey:'ubicacion_id'});
    }
  };
  Ubicacion.init({
    codigo: DataTypes.STRING,
    descripcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Ubicacion',
    tableName: 'ubicaciones' 
  });
  return Ubicacion;
};