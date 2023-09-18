const axios = require('axios');
require("dotenv").config();
const {API_KEY,ENDPOINT} = process.env;

const getDogsAPI = async (req,res) => {
    try {
        const {data} = await axios.get(`${ENDPOINT}?api_key=${API_KEY}`);
        const arrDogs=[];

        data.forEach((dog)=>{
            const dogAPI = {
               id:dog.id,
               name:dog.name,
               height:dog.height.imperial,
               weight:dog.weight.imperial,
               life_span:dog.life_span,
               image:dog.image.url,
               temperament:dog.temperament
            }
            arrDogs.push(dogAPI);
        })
        return arrDogs;
    } catch (error) {
        throw new Error('Ningun perro');
    }
};

module.exports = getDogsAPI;