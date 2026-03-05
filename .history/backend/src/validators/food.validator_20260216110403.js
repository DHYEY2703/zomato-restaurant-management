const { body } = require("express-validator");

exports.createFoodValidator = [

    body("name")
        .notEmpty()
        .withMessage("Name is required"),

    body("description")
        .optional()
        .isString()
        .withMessage("Description must be string"),

    body("video")
        .notEmpty()
        .withMessage("Video is required"),

    body("foodPartner")
        .notEmpty()
        .withMessage("Food Partner is required")

];
