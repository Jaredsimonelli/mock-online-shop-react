import storeReducer from "./store";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  store: storeReducer,
  isLogged: loggedReducer,
});

export default allReducers;
