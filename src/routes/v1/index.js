const express = require('express');
const router = express.Router();

const CityController = require('../../controllers/city-controller');
const FlightController = require('../../controllers/flight-controller');

//city routes
router.post('/city', CityController.create);
router.delete('/city/:id', CityController.destroy);
router.get('/city/:id', CityController.get);
router.get('/city', CityController.getAll);
router.patch('/city/:id', CityController.update);

// airplane routes

router.post('/flights',FlightController.create);



module.exports = router;

