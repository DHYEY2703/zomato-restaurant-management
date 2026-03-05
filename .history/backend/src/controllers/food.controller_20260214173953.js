const foodModel = require('../models/food.model');



async function createFood(req, res) {

    console.log(req.foodPartner);


    console.log(req.file);
    console

    res.send("Food Item Created Successfully");
}



module.exports = {
    createFood
}