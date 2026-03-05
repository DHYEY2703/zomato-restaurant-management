const foodPartnerModel = require('../models/foodpartner.model');
const jwt = require('jsonwebtoken');


async function authfoodPartnerMiddleware(req, res, next) {