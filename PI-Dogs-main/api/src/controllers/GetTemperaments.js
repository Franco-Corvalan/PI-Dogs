const getDogsAPI = require('../controllers/handlers/DogsAPI');
const { Temperaments } = require('../db');

const getTemperaments = async (req,res) => {
    try {
        const arrDogs = await getDogsAPI();
        const arrTemp = arrDogs
        .map(elem => elem.temperament)
        .filter(elem => elem != null)
        .join(', ')
        .split(',')
        .map(elem => elem.trim())
        .sort();

        for(const temp of arrTemp){
            await Temperaments.findOrCreate({where:{
                name:temp
            }})
        }
        
        const result = await Temperaments.findAll();

        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = getTemperaments;