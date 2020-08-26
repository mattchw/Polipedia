import { combineReducers } from "redux";
import { dataReducer } from "./dataReducer";
import { generalReducer } from "./generalReducer";
  
export default combineReducers({
  dataReducer,
  generalReducer,
});