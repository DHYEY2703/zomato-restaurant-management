const express = require('express');
const authController = require('../controllers/auth.controller');


const router = express.Router();

// Sample route for user authentication
router.post('/user/register', authController.registerUser);


module.exports = 
