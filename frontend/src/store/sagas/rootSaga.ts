import { all, fork } from 'redux-saga/effects';
import tweetsSaga from './tweetsSaga';

function* rootSaga() {
    yield all([fork(tweetsSaga)]);
}

export default rootSaga;
