import { call, put, takeEvery } from "redux-saga/effects";
import Server from '../Server/server';
import { GET_TOP250_LIST,UPDATE_TOP250_LIST} from '../actions/movieAction';

function* getList(action) {
    const data = yield call(
        () => Server.top250({start: action.end, count: 11})
        .then(result => {
            const movies = result.data.subjects;
            if(movies) {
                return {list:movies, end: action.end+11}
            }
            return {list: [], end: action.end};
        })
    );
    yield put({type: UPDATE_TOP250_LIST, ...data});
}

function* rootSaga() {
    yield takeEvery(GET_TOP250_LIST, getList)
}

export default rootSaga;