const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    descrdescriptioniption: {
        type: String,
    },
    video: {
        type: String,
        required: true
    },
    foodPartner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'food-partner',
        required: true

    },
}, { timestamps: true });

const foodModel = mongoose.model("food", foodSchema);

module.exports = foodModel;
