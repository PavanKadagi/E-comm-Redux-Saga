import { combineReducers } from "redux";
import { productData } from "./Reducer";
import { cartData } from "./ReducerClick";
const rootReducer = combineReducers({
  productData,
  cartData
});
export default rootReducer;
