const foodModel = require('../models/food.model');
const storageService = require('../services/storage.service');
const { v4: uuid } = require("uuid");


async function createFood(req, res) {

    console.log(req.foodPartner);


    console.log(req.file);
    console.log(req.body);

    const fileUploadResult = await storageService.uploadFile(req.file.buffer, uuid());

    const foodItem = await foodModel.create({
        name: req.body.name,
        video: fileUploadResult.url,
        description: req.body.description,
        foodPartner: req.foodPartner._id
    })
    res.status(201).json({
        message: 'Food Item Created Successfully',
        foodItem : 
    })

    res.send("Food Item Created Successfully");
}



module.exports = {
    createFood
}