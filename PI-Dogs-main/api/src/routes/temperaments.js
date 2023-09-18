const { Router } = require('express');
const router = Router();
const getTemperaments = require('../controllers/GetTemperaments');

router.get('/temperament',getTemperaments);

module.exports = router;