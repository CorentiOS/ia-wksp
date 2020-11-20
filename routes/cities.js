const express = require('express');
router = express.Router();

const cities = require('../controllers/cities');


router.get('/', cities.getAllCities)

module.exports = router;