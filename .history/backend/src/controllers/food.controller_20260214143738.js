const foodModel = require('../models/food.model');



async function createFood(req, res) {

    console.log(req.foodPartner);

    res.send("Food Item Created Successfully");
    res.send(req)
}



module.exports = {
    createFood
}