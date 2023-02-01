import { createSlice } from "@reduxjs/toolkit";

const ingredientsDetails = createSlice({
  name: 'ingredientsDetails',
  initialState: {
    isvisible: false,
    ingredients: {},
    title: ''
  },
  reducers: {
    SET_INGREDIENTS: (state, action) => {
      state.ingredients = action.payload
    },
    SET_INGREDIENTS_BOX_VISIBLE: (state, action) => {
      state.isvisible = action.payload
    },
    SET_TITLE: (state, action) => {
      state.title = action.payload
    },
  }
})

export default ingredientsDetails