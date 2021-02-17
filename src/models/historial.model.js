'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Historial extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Historial.belongsTo(models.Ubicacion, { as: 'origen', foreignKey: 'origen_id' });
      Historial.belongsTo(models.Ubicacion, { as: 'destino', foreignKey: 'destino_id' });
      Historial.belongsTo(models.Articulo, { as: 'articulo', foreignKey: 'articulo_id' });
    }
  };
  Historial.init({
    fecha: DataTypes.STRING,
    observacion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Historial',
    tableName: 'historiales'
  });
  return Historial;
};