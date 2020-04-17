import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";

//combine reducer function takes object as an argument, with key value type
const rootReducer = combineReducers({
  counterTrack: counterReducer,
  isloggedTrack: loggedReducer,
});

export default rootReducer;
