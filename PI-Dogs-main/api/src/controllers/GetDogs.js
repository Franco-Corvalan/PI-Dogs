const getDogsMAIN = require('./handlers/DogsMAIN');

const getDogs = async (req,res) => {
    try {
        const arrDogs = await getDogsMAIN();
        res.status(200).json(arrDogs);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

module.exports = getDogs;
