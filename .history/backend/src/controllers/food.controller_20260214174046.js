const foodModel = require('../models/food.model');
const 


async function createFood(req, res) {

    console.log(req.foodPartner);


    console.log(req.file);
    console.log(req.body);

    const fileUploadResult = await 

    res.send("Food Item Created Successfully");
}



module.exports = {
    createFood
}