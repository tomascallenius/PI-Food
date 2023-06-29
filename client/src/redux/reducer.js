import {
  GET_ALL_RECIPES,
  GET_RECIPE_BY_ID,
  GET_RECIPE_BY_NAME,
  POST_RECIPE,
} from "./action-types";

const initialState = {
  recipes: [],
  detail: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_RECIPES:
      return {
        ...state,
        recipes: action.payload,
      };
    case GET_RECIPE_BY_ID:
      return {
        ...state,
        detail: action.payload,
      };
    case GET_RECIPE_BY_NAME:
      return {
        recipes: action.payload,
      };
    case POST_RECIPE:
      return {
        ...state,
        //falta: falta?,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
