const { Router } = require('express');

const getDogs = require('../controllers/GetDogs');
const getDogsId = require('../controllers/GetDogsId'); 
const getDogsName = require('../controllers/GetDogsName');
const postDog = require('../controllers/PostCreateDog');

const router = Router();

router.get('/dogs', getDogs);
router.get('/dogs/:id',getDogsId);
router.get('/dog',getDogsName);

router.post('/create',postDog);

module.exports = router;