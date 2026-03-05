const express = require('express');
const foodController = require('../controllers/food.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const router = express.Router();
const multer = require('multer');
const { createFoodValidator } = require('../validators/food.validator');

const upload = multer({
    storage: multer.memoryStorage(),
})

router.post(

    "/create",

    createFoodValidator,

    foodController.createFood

);


// POST /api/food/ - Create a new food item
router.post('/', authMiddleware.authFoodPartnerMiddleware, upload.single('Video'), foodController.createFood);

module.exports = router;