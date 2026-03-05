const foodModel = require('../models/food.model');
const storageService = require('../services/storage.service');
const { v4: uuid } = require("uuid");
const { validationResult } = require("express-validator");
const foodDAO = require("../dao/food.dao");




async function createFood(req, res) {

    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    // ✅ ADD THIS VALIDATION BLOCK
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            message: "Validation Failed",
            errors: errors.array()
        });
    }

    const fileUploadResult = await storageService.uploadFile(req.file.buffer, uuid());

    const foodItem = await foodDAO.createFood({
        name: req.body.name,
        description: req.body.description,
        video: fileUploadResult.url,
        foodPartner: req.foodPartner._id
    })

    res.status(201).json({
        message: 'Food Item Created Successfully',
        food: foodItem
    })

}



async function getFoodItems(req, res) {

}

async function getFoodItemById(req, res) {

module.exports = {
    createFood
}
