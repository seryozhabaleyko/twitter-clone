import { all, fork } from 'redux-saga/effects';
import { tweetsSaga } from './tweetsSaga';
import { topicsSaga } from './topicsSaga';
import { tweetSaga } from './tweet';

function* rootSaga() {
    yield all([fork(tweetsSaga), fork(topicsSaga), fork(tweetSaga)]);
}

export default rootSaga;
