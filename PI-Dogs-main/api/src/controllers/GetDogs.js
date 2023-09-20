const getDogsMAIN = require('./handlers/DogsMAIN');
const dogsAPI = require('./handlers/DogsAPI');
const dogsDB = require('./handlers/DogsDB');

const getDogs = async (req,res) => {
    try {
        const arrDogs = await getDogsMAIN();
        res.status(200).json(arrDogs);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

const getDogsAPI = async (req,res) => {
    try {
        const arrDogs = await dogsAPI();
        res.status(200).json(arrDogs);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

const getDogsDB = async (req,res) => {
    try {
        const arrDogs = await dogsDB();
        res.status(200).json(arrDogs);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};
module.exports = {
    getDogs,
    getDogsAPI,
    getDogsDB
}