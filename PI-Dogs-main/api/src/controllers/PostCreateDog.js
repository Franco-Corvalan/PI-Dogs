const { Dog , Temperaments } = require('../db');

const postDog = async (req,res) => {
    try {
        const {name,life_span,image,weight,height,temperament} = req.body;

        const existingDog = await Dog.findOne({
            where: {
              name: name
            }
          });
      
          if (existingDog) {
            return res.status(404).json({ error: 'El perro ya existe en la base de datos' });
          }
        
        const dogCreate = await Dog.create({
            name:name,
            height:height,
            weight:weight,
            life_span:life_span,
            image:image,
        });

        for(const temp of temperament){
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