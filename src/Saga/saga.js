import { call, put, takeEvery } from "redux-saga/effects";
import Server from '../Server/server';
import { GET_TOP250_LIST,UPDATE_TOP250_LIST} from '../Actions/movieAction';

function* getList(action) {
    //call执行网络请求
    const data = yield call(
        () => Server.top250({start: action.end, count: 11})
        .then(result => {
            const movies = result.data.subjects;
            if(movies) {
                return {list:movies, end: action.end+11}
            }
            return {list: [], end: action.end};
        })
        .catch(err => {
            console.log(err);
        })
    );
    //put类似于dispatch某个Action
    yield put({type: UPDATE_TOP250_LIST, ...data});
}

function* rootSaga() {
    yield takeEvery(GET_TOP250_LIST, getList)   //takeEvery(arg1, arg2) arg1:监听某个action, arg2:执行对应的异步操作
}

export default rootSaga;