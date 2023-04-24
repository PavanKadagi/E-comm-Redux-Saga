import { PRODUCT_LIST, PRODUCT_SEARCH } from "./Constant";

export const productList = () => {
  console.log("Action");
  return {
    type: PRODUCT_LIST
  };
};

export const productSearch = (query) => {
  console.log("productSearch");
  return {
    type: PRODUCT_SEARCH,
    query
  };
};
