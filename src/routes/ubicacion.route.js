const express = require('express');
const router = express.Router();
const UbicacionController = require('../controllers/ubicacion.controller');

router.get('/',UbicacionController.Get);
router.get('/:id',UbicacionController.GetById);
router.post('/',UbicacionController.Post);
router.put('/:id',UbicacionController.Put);
router.delete('/:id',UbicacionController.Del);

module.exports = router;