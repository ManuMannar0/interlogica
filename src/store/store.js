import { combineReducers } from "redux";
import ingredientsDetails from './ingredientsDetails/slice'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'

export const rootReducer = combineReducers({
    ingredientsDetails: ingredientsDetails.reducer,
})

const store = createStore(
    rootReducer, 
    compose(composeWithDevTools(applyMiddleware(thunk)))
)
export default store