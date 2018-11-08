import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import document from "./document";

const persistConfig = {
  key: "root",
  storage,
};

export default persistReducer(
  persistConfig,
  combineReducers({
    document
  })
);
