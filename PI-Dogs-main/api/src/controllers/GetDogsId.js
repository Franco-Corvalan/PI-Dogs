const getDogsMAIN = require('./handlers/DogsMAIN');

const getDogsId = async (req, res) => {
  const { id } = req.params;

  try {
    
    const arrDogs = await getDogsMAIN();

    const result = await arrDogs.find(dog => dog.id == id);

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });

  }
}

module.exports = getDogsId;