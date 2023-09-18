const getDogsMAIN = require('../controllers/handlers/DogsMAIN');

const getDogsName = async (req, res) => {
    const { name } = req.query;
    try {
        const arrDogs = await getDogsMAIN();
        
        const result = arrDogs.find(elem => elem.name.toLowerCase() == name.toLowerCase());
        result ? res.status(200).send(result) : res.status(400).send('error')

    } catch (error) {

        res.status(404).send(error.message);
    }
}

module.exports = getDogsName;