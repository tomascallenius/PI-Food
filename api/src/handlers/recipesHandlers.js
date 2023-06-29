const {
  getAllRecipes,
  getRecipeById,
  getByName,
  postRecipe,
} = require("../controllers/recipesControllers");

const getAllRecipesHandler = async (req, res) => {
  try {
    let allRecipes = await getAllRecipes();
    res.status(200).json(allRecipes);
  } catch (error) {
    res.status(400).json({ message: "No se encontraron recetas" });
  }
};

const getIdRecipeHandler = async (req, res) => {
  const id = req.params.id;
  let source = isNaN(id) ? "db" : "api";

  try {
    let recipe = await getRecipeById(id, source);
    res.status(200).json(recipe);
  } catch (error) {
    res.status(400).json({ message: "No se encuentra la receta con ese id" });
  }
};

const getByNameHandler = async (req, res) => {
  const name = req.query.name;

  try {
    console.log(name);
    let byName = await getByName(name);
    res.status(200).json(byName);
  } catch (error) {
    res
      .status(400)
      .json({ message: "No se encuentra una receta con ese nombre" });
  }
};

const postRecipeHandler = async (req, res) => {
  const { title, image, healthscore, summary, steps, diets } = req.body;
  try {
    let recipePost = await postRecipe(
      title,
      image,
      healthscore,
      summary,
      steps,
      diets
    );
    res.status(200).json(recipePost);
  } catch (error) {
    res.status(400).json({ message: "No se ha podido crear la receta" }); //completar el mensaje de error;
  }
};

module.exports = {
  getAllRecipesHandler,
  getByNameHandler,
  getIdRecipeHandler,
  postRecipeHandler,
};
