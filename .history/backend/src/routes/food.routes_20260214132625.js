const express = require('express');
const foodController = require('../controllers/food.controller');

const router = express.Router();

// POST /api/food/ - Create a new food item
router.post('/', foodController.createFood);

module.exports = router;