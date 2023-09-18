const { Dog, Temperaments } = require('../../db')

const getDogsDB = async () => {
    try {
        const data = (await Dog.findAll({
            include: {
                model: Temperaments,
                attributes: ['name'],
                through: { attributes: [] }
            }
        })).map(record => record.toJSON());

        // Modificar los objetos Dog para que Temperaments sea una cadena
        data.forEach(item => {
            const temperamentsArray = item.Temperaments.map(temp => temp.name);
            item.temperament = temperamentsArray.join(', ');
            delete item.Temperaments;
        });

        return data;
    } catch (error) {
        throw new Error(error)
    }
};

module.exports = getDogsDB;