const mongoose = require('mongoose');

function connectDB() {
    mongoose.connect("mongodb://localhost:27017/food-view", {
        useNewUrlParser: true,
        useUnifiedTopology: true,{
            useCreateIndex: true,
            useFindAndModify: false
        }   
    }).then(() => {
        console.log("MongoDB connected successfully");
    }).catch((err) => {
        console.error("MongoDB connection error:", err);
    }