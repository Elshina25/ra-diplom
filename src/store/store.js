import { configureStore } from '@reduxjs/toolkit';
import reducerItem from '../reducers/reducerItem';
import reducerCart from '../reducers/reducerCart';
import reducerTopList from '../reducers/reducerTopList';
import reducerCatalog from '../reducers/reducerCatalog';
import reducerHeadSearch from '../reducers/reducerHeadSearch';
import reducerCatalogSearch from '../reducers/reducerCatalogSearch';
import {
  saveToLocalStorage,
  loadFromLocalStorage,
} from "./localStorage";
import { combineReducers } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  reducerTopList,
  reducerCatalog,
  reducerHeadSearch,
  reducerCatalogSearch,
  reducerItem, 
  reducerCart
});

const store = configureStore({
  reducer: rootReducer,
  preloadedState: { reducerCart: loadFromLocalStorage("reducerCart") },
  middleware: [thunk]
})

store.subscribe(() => {
  saveToLocalStorage("reducerCart", store.getState().reducerCart);
});

export default store;