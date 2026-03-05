const mongoose = require('mongoose');

function connectDB() {
    mongoose.connect("mongodb://localhost:27017/your_database_name", {