const express = require('express');
router = express.Router();

const cars = require('../controllers/cars');


router.get('/', cars.searchCars2)

module.exports = router;