import { combineReducers } from "redux";
import { categoryReducer } from "./reducers/categoryReducer";
import { catReducer } from "./reducers/catReducer";



export const rootReducer = combineReducers({
    cat: catReducer,
    category: categoryReducer
})