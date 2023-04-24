import rootReducer from "./RootReducer";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import productSaga from "./ProductSaga";

const createSaga = createSagaMiddleware();
export const store = configureStore({
  reducer: rootReducer,
  middleware: () => [createSaga]
});

createSaga.run(productSaga);
