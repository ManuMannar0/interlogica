import { createSlice } from "@reduxjs/toolkit";
const ingredientsDetails = createSlice({
  name: 'ingredientsDetails',
  initialState: {
    ingredients: {}
  },
  reducers: {
    SET_INGREDIENTS: (state, action) => {
      state.ingredients = action.payload
    }
  }
})
export default ingredientsDetails

export const isvisibleSelector = (state) => state.ingredientsDetails.isvisible
export const {SET_INGREDIENTS} = ingredientsDetails.actions