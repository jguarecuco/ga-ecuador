const express = require('express');
const router = express.Router();
const ActivofController = require('../controllers/activof.controller');

router.get('/',ActivofController.Get);
router.get('/:id',ActivofController.GetById);
router.post('/',ActivofController.Post);
router.put('/:id',ActivofController.Put);
router.delete('/:id',ActivofController.Del);

module.exports = router;