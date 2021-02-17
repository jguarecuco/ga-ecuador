const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

//Settings
app.set('PORT', process.env.PORT || 4000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
// Configurar cabeceras y cors
app.use(cors());

//Routes
app.use('/api/ubicacion',require('./routes/ubicacion.route'));
app.use('/api/estado',require('./routes/estado.route'));
app.use('/api/articulo',require('./routes/articulos.route'));
app.use('/api/historial',require('./routes/historial.route'));
app.use('/api/activof',require('./routes/activof.route'));
app.use('/api/dactivo',require('./routes/dactivo.router'));

module.exports = app;