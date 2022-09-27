import { ing } from "../../utils/api.js";
import { GET_INGREDIENTS } from "../actions/ingredients.js";


export const reducer = (state = ing, action) => {
  switch (action.type) {
    case GET_INGREDIENTS :
      return [...state, {components: action.payload}]
  }
}

export const addManyIngredients = (payload) => ({type: GET_INGREDIENTS, payload});