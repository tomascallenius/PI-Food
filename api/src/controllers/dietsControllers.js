const { Diet } = require("../db");
const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;

const getAllDiets = async () => {
  const dietsDB = [];
  const dietsAPI = (
    await axios(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true`
    )
  ).data.results;
  const arrayDiets = dietsAPI.map((recipe) => recipe.diet);
  for (let i = 0; i < arrayDiets.length; i++) {}

  await Diet.bulkCreate(
    dietsDB.map((diet) => {
      //para agregar las dietas a la DB
      return {
        name: diet,
      };
    }),
    { ignoreDuplicates: true }
  );
};
const getDietsDB = async () => {
  //para obtener todas las dietas de la DB
  const diets = await Diet.findAll();
  return diets;
};

module.exports = { getAllDiets };
