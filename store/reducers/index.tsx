import { combineReducers } from "redux";
import businessesReducer from "./businesses";

export const Reducers = combineReducers({
  business: businessesReducer,
});
