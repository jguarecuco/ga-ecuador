const express = require('express');
const router = express.Router();
const EstadoController = require('../controllers/estado.controller');

router.get('/',EstadoController.Get);
router.get('/:id',EstadoController.GetById);
router.post('/',EstadoController.Post);
router.put('/:id',EstadoController.Put);
router.delete('/:id',EstadoController.Del);

module.exports = router;