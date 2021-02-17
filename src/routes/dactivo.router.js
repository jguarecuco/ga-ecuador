const express = require('express');
const router = express.Router();
const DactivoController = require('../controllers/dactivo.controller');

router.get('/',DactivoController.Get);
router.get('/:id',DactivoController.GetById);
router.post('/',DactivoController.Post);
router.put('/:id',DactivoController.Put);
router.delete('/:id',DactivoController.Del);

module.exports = router;