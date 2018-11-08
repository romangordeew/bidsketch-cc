import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import test from "./test";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "stats"]
};

export default persistReducer(
  persistConfig,
  combineReducers({
    test
  })
);
