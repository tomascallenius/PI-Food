const { getAllDiets } = require("../controllers/dietsControllers");

const getDietsHandler = async (req, res) => {
  try {
    let diets = await getAllDiets();
    res.status(200).json(diets);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getDietsHandler };
