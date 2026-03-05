const foodModel = require("../models/food.model");


// ✅ CREATE FOOD
async function createFood(foodData) {

    const foodItem = await foodModel.create(foodData);

    return foodItem;

}


// ✅ GET ALL FOOD
async function getAllFood() {

    const foodList = await foodModel.find()
        .populate("foodPartner");

    return foodList;

}


// ✅ GET FOOD BY ID
async function getFoodById(foodId) {

    const foodItem = await foodModel.findById(foodId)
        .populate("foodPartner");

    return foodItem;

}


// ✅ DELETE FOOD
async function deleteFood(foodId) {

    const deletedFood = await foodModel.findByIdAndDelete(foodId);

    return deletedFood;

}



module.exports = {

    createFood,
    getAllFood,
    getFoodById,
    deleteFood

};
