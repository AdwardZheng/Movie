import { createStore, applyMiddleware } from "redux";
import allReducer from '../reducers/movieReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../Saga/saga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = createStore(allReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);

export default store;