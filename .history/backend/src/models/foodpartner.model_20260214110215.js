const mongoose = require('mongoose');

const foodPartnerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true 
    },
    email: {
        type: String,   
        required: true,
        unique: true
    },  
    password: {
        type: String,
        required: true
    },
    restaurantName: {
        type: String,
        required: true  
    },
    restaurantAddress: {
        type: String,   
        required: true
    },  
    restaurantPhone: {
        type: String,
        required: true
    },
    restaurantCuisine: {
        type: String,
        required: true