const { Recipe } = require("../db");
const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;

const getAllRecipes = async () => {
  const recipes = (
    await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
    )
  ).data.results;
  return recipes;
};
const getRecipeById = async (id, source) => {
  let dataFormat;
  if (source === "api") {
    const recipe = (
      await axios.get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
      )
    ).data;

    let api = recipe;
    dataFormat = {
      id: api.id,
      title: api.title,
      image: api.image,
      summary: api.summary.replace(/<[^>]+>/g, ""),
      healthScore: api.healthScore,
      steps: api.instructions,
      diets: api.diets?.map((diet) => {
        //mapeo las dietas para obtener el nombre de cada dieta
        return diet;
      }),
    };
    // console.log(api.diets);
  } else {
    dataFormat = await Recipe.findOne({
      where: {
        id: id,
      },
      include: {
        model: Diet,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
  }
  return dataFormat;
};

const getByName = async (titleQ) => {
  let recipesAPI = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
  );
  let filterRecipes;
  let recipesDB;

  // si tengo query filtro sobre ella
  if (titleQ) {
    filterRecipes = recipesAPI.data.results.filter((recipe) =>
      recipe.title.toLowerCase().includes(titleQ.toLowerCase())
    );
    recipesDB = await Recipe.findAll({
      where: { name: { [Op.iLike]: `%${titleQ}%` } },
      include: [{ model: Diet }],
    });
  } else {
    filterRecipes = allRecipes.data.results;
    recipesDB = await Recipe.findAll({ include: [{ model: Diet }] });
  }

  recipesDB = Recipe.findAll({
    include: {
      model: Diet,
    },
  }).then((data) =>
    data.map((recipe) => {
      //para transformar el formato de las recetas
      return {
        id: recipe.id,
        title: recipe.title,
        image: recipe.image,
        summary: recipe.summary,
        healthScore: recipe.healthScore,
        steps: recipe.steps,
        diets: recipe.diets.map((diet) => diet.name),
      };
    })
  );
};

const postRecipe = async (title, image, healthscore, summary, steps, diets) => {
  const createdRecipe = await Recipe.create({
    title,
    image,
    healthscore,
    summary,
    steps: [steps],
  });
  for (let i = 0; i < diets.length; i++) {
    const diet = await Diets.findAll({
      where: {
        name: diets[i],
      },
    });
    await createdRecipe.addDiets(diet[0].id);
  }
  return createdRecipe;
};

module.exports = { getAllRecipes, getRecipeById, getByName, postRecipe };
