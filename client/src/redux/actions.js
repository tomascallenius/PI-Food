import {
  GET_ALL_RECIPES,
  GET_RECIPE_BY_ID,
  GET_RECIPE_BY_NAME,
  POST_RECIPE,
} from "./action-types";
import axios from "axios";

export const getAllRecipes = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get("http://localhost:3001/recipes");
      dispatch({ type: GET_ALL_RECIPES, payload: response.data });
    } catch (error) {
      alert("No se encontraron recetas");
    }
  };
};

export const getlRecipesById = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`http://localhost:3001/recipes/${id}`);
      dispatch({ type: GET_RECIPE_BY_ID, payload: response.data });
    } catch (error) {
      alert("No se encontró la receta");
    }
  };
};

export const getRecipesByName = (name) => {
  return async function (dispatch) {
    try {
      console.log(name);
      const response = await axios.get(
        `http://localhost:3001/recipes/name?name=${name}`
      );
      dispatch({ type: GET_RECIPE_BY_NAME, payload: response.data });
    } catch (error) {
      alert("No se encontró una receta con ese nombre");
    }
  };
};

export const postRecipe = (form) => {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        `http://localhost:3001/recipes/createRecipe`,
        form
      );
      dispatch({ type: POST_RECIPE, payload: response.data });
    } catch (error) {
      alert("No se pudo crear la receta");
    }
  };
};
