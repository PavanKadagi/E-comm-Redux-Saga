import { ADD_TO_CART, REMOVE_FROM_CART } from "./Constant";

export const AddToCart = (data) => {
  return {
    type: ADD_TO_CART,
    data
  };
};

export const RemovFromCart = (data) => {
  return {
    type: REMOVE_FROM_CART,
    data
  };
};
