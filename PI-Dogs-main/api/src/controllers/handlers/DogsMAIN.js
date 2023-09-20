const getDogsAPI = require('./DogsAPI');
const getDogsDB = require('./DogsDB');

const getDogsMAIN = async () => {
    try {
        const API = await getDogsAPI();
        const DB = await getDogsDB();
        if(DB === null){
            return API
        } else{
            return API.concat(DB);
        }
        
    } catch (error) {
        throw new Error('error vacio');
    }
}

module.exports = getDogsMAIN;