const { Sequelize, DataTypes } = require('sequelize');
const config = require('../../config/database');
const db = {};

db.connection = new Sequelize(config.database, config.username, config.password, config);

//Vinculamos los modelos

db.Roles = require('../models/rol.model')(db.connection, DataTypes);
db.Users = require('../models/user.model')(db.connection, DataTypes);

//Creamos las asociaciones
db.Users.associate(db);
db.Roles.associate(db);
module.exports = db;
