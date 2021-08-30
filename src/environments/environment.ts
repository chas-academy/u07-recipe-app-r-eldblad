export const environment = {
  production: false,
  // Spoonacular API
  API_KEY: process.env.API_KEY,
  // User Requests
  REGISTER_USER: process.env.REGISTER_USER,
  SIGN_IN: process.env.SIGN_IN,
  PROFILE_USER: process.env.PROFILE_USER,

  // CRUD Requests
  GET_ALL_RECIPE_LISTS: process.env.GET_ALL_RECIPE_LISTS,
  GET_RECIPE_LIST: process.env.GET_RECIPE_LIST,
  CREATE_RECIPE_LIST: process.env.CREATE_RECIPE_LIST,
  UPDATE_RECIPE_LIST: process.env.UPDATE_RECIPE_LIST,
  DELETE_RECIPE_LIST: process.env.DELETE_RECIPE_LIST,
};
