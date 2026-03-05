const foodModel = require('../models/food.model');



async function createFood(req, res) {

    console.log(req.foodPartner);

    con

    res.send("Food Item Created Successfully");
}



module.exports = {
    createFood
}