const { Router } = require("express");
const {
  getAllRecipesHandler,
  getIdRecipeHandler,
  getByNameHandler,
  postRecipeHandler,
} = require("../handlers/recipesHandlers");
const recipesRouter = Router();

recipesRouter.get("/", getAllRecipesHandler);
recipesRouter.get("/name", getByNameHandler); //desp del = iria el nombre de la receta.
recipesRouter.get("/:id", getIdRecipeHandler);
recipesRouter.post("/createRecipe", postRecipeHandler);

module.exports = recipesRouter;
