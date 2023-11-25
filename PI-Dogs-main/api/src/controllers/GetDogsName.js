const getDogsMAIN = require('../controllers/handlers/DogsMAIN');

const getDogsName = async (req, res) => {
    const { name } = req.query;
    try {
        const arrDogs = await getDogsMAIN();
        
        const result = arrDogs.filter(e => e.name && e.name.toLowerCase().includes(name.toLowerCase()));
        console.log(result)
        result ? res.status(200).send(result) : res.status(400).send('error')

    } catch (error) {

        res.status(404).send(error.message);
    }
}

module.exports = getDogsName;