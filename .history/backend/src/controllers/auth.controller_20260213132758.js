const userModel = require('../models/user.model');
const becrypt = require('bcryptjs');

// Sample controller function for user registration
async function registerUser(req, res) {
    const { fullName, email, password } = req.body;

    const isUserAlreadyExists = await userModel.findOne({ email });
    if (isUserAlreadyExists) {
        return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = password; // In a real application, you should hash the password before storing it
}
