const foodPartnerModel = require('../models/foodpartner.model');
const jwt = require('jsonwebtoken');


async function authfoodPartnermiddleware(req, res, next) {