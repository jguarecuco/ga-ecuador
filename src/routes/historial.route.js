const express = require('express');
const router = express.Router();
const HistorialController = require('../controllers/historial.controller');

router.get('/',HistorialController.Get);
router.get('/:id',HistorialController.GetById);
router.get('/articulo/:id',HistorialController.GetByArtId);
router.post('/',HistorialController.Post);
router.put('/:id',HistorialController.Put);
router.delete('/:id',HistorialController.Del);

module.exports = router;