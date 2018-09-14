import { createStore, applyMiddleware } from "redux";
import allReducer from '../Reducers/movieReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../Saga/saga';

//saga中间件
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = createStore(allReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);

export default store;