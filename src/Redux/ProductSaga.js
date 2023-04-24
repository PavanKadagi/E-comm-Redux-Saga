import { takeEvery, put } from "redux-saga/effects";
import { SET_PRODUCT_LIST, PRODUCT_LIST, PRODUCT_SEARCH } from "./Constant";

function* getData() {
  let data = yield fetch("https://product-api-lsjr.onrender.com/Service");
  data = yield data.json();
  console.log("API ", data);
  yield put({ type: SET_PRODUCT_LIST, data });
}

function* searchData(data) {
  let result = yield fetch(
    `https://product-api-lsjr.onrender.com/Serviceq=${data.query}`
  );
  result = yield result.json();
  console.log("-----", data);
  yield put({ type: SET_PRODUCT_LIST, data: result });
}

export default function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getData);
  yield takeEvery(PRODUCT_SEARCH, searchData);
}
