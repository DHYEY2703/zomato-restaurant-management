const express = require('express');
const foodController = require('../controllers/food.controller');

const router = express.Router();

// POST 
router.post('/', foodController.createFood);

module.exports = router;