const { Dog , Temperaments } = require('../db');

const postDog = async (req,res) => {
    try {
        const {name,life_span,image,weight,height,temperament} = req.body;
        
        const dogCreate = await Dog.create({
            name:name,
            height:height,
            weight:weight,
            life_span:life_span,
            image:image,
        });
        
        const temperamentarr=temperament.split(',').map(elem => elem.trim());

        for(const temp of temperamentarr){
            let [temperament, create] = await Temperaments.findOrCreate({
                where:{name:temp}
            });
            await dogCreate.addTemperaments(temperament);
        }
        res.status(200).json('Dog create');
    } catch (error) {
        res.status(500).json('Error Dog create');
    }
}

module.exports = postDog;