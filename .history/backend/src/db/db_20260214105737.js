const mongoose = require('mongoose');

function connectDB() {
    mongoose.connect(process.env.MONGODB_UR)
        .then(() => {
            console.log("Connected to MongoDB");
        })
        .catch((err) => {
            console.error("Error connecting to MongoDB:", err);
        });
}

module.exports = connectDB;
