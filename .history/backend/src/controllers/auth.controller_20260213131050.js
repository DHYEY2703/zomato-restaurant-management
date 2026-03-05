const userModel = require('../models/user.model');

// Sample controller function for user registration
async function registerUser(req, res) {
    try {
        const { fullName, email, password } = req.body; 
        // Check if the user already exists
        const existingUser = await userModel.findOne({