'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Articulo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Articulo.belongsTo(models.Estado, { as: 'estado', foreignKey: 'estado_id' });
      Articulo.belongsTo(models.Ubicacion, { as: 'ubicacion', foreignKey: 'ubicacion_id' });
      Articulo.hasMany(models.Historial,{as:'historial',foreignKey:'articulo_id'});
      //un articulo pertenece a una descripcion de activo
      Articulo.belongsTo(models.Dactivo,{as:'dactivo',foreignKey:'dactivo_id'});
    }
  };
  Articulo.init({
    codigo: DataTypes.STRING,
    color: DataTypes.STRING,
    marca: DataTypes.STRING,
    serie: DataTypes.STRING,
    anio_c: DataTypes.STRING,
    valor_c: DataTypes.STRING,
    valor_d: DataTypes.STRING,
    factura: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Articulo',
    tableName: 'articulos'
  });
  return Articulo; 
};