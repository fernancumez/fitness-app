import { exerciseReducers } from "./exerciseReducers";
import { combineReducers } from "redux";

export const rootReducers = combineReducers({
  exercises: exerciseReducers,
});
