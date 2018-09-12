import { createStore } from "redux";
import allReducer from '../reducers/movieReducer';

const store = createStore(allReducer);
console.log(store.getState());
export default store;