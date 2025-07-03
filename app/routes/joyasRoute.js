const express = require('express');
const joyasController = require('../controllers/joyasController');
const router = express.Router();
router.get('/',joyasController.buscarTodo );

module.exports = router;