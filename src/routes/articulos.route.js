const express = require('express');
const { searchByUbicacion } = require('../controllers/articulo.controller');
const router = express.Router();
const ArticuloController = require('../controllers/articulo.controller');

router.get('/',ArticuloController.Get);
router.get('/:id',ArticuloController.GetById);
router.post('/',ArticuloController.Post);
router.put('/:id',ArticuloController.Put);
router.delete('/:id',ArticuloController.Del);

router.get('/ubicacion/:id',ArticuloController.GetByUbicacionId);
router.get('/busqueda/:search',ArticuloController.search);
router.get('/ubicacion/:ubicacion/busqueda/:search',searchByUbicacion);

module.exports = router;