const express = require('express');
const router = express.Router();
const controllers = require('../controllers/index');

router.get('/', controllers.foodController.getFoodItems);

module.exports = router;

