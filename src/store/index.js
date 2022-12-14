import { applyMiddleware, legacy_createStore as createStore } from "redux"
import logger from "redux-logger"
import thunk from "redux-thunk"
import { rootReducer } from "./rootReducer";

const middlewares = [thunk, logger]

export const store = createStore(rootReducer, applyMiddleware(...middlewares));