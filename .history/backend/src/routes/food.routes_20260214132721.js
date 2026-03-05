const express = require('express');
const foodController = require('../controllers/food.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const router = express.Router();

// POST /api/food/ - Create a new food item
router.post('/',authMiddleware.authFoodPartnerMiddleware, foodController.createFood);

module.exports = router;