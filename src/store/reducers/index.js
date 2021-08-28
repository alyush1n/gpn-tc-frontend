import { combineReducers } from "redux";
import loadReducer from "./loadReducer";
import { addResponseToStore } from "./searchReducer";
import { showMoreCard } from "./showMoreCardReducer";

const reducers = combineReducers({
  load: loadReducer,
  addResponseToStore,
  showMoreCard,
});

export default reducers;
