const express = require('express');
const foodController = require('../controllers/food.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const router = express.Router();
const multer = require('multer');
const { createFoodValidator } = require('../validators/food.validator');

const upload = multer({
    storage: multer.memoryStorage(),
})


// POST /api/food/ - Create a new food item

router.post(

    "/create",

    createFoodValidator,
    authMiddleware.authFoodPartnerMiddleware,
    upload.single('video'),
    foodController.createFood

);

// GET /api/food/ - Get all food items



// POST /api/food/ - Create a new food item
// router.post('/', authMiddleware.authFoodPartnerMiddleware, upload.single('Video'), foodController.createFood);

module.exports = router;