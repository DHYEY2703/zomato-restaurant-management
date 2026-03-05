const express = require('express');
const foodController = require('../controllers/food.controller');
const router = express.Router();


router.post('/create', foodController.createFood);

module.exports = router;