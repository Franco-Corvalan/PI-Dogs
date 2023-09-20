const { Router } = require('express');

const { getDogs , getDogsAPI , getDogsDB }  = require('../controllers/GetDogs');
const getDogsId = require('../controllers/GetDogsId'); 
const getDogsName = require('../controllers/GetDogsName');
const postDog = require('../controllers/PostCreateDog');

const router = Router();

router.get('/dogs', getDogs);
router.get('/dogs/:id',getDogsId);
router.get('/name',getDogsName);
router.get('/api',getDogsAPI);
router.get('/db',getDogsDB);

router.post('/create',postDog);

module.exports = router;