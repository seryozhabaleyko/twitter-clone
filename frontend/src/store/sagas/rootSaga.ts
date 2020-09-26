import { all, fork } from 'redux-saga/effects';

import { tweetsSaga } from './tweetsSaga';
import { topicsSaga } from './topicsSaga';
import { tweetSaga } from './tweet';
import { recommendedSaga } from './recommended';

function* rootSaga() {
    yield all([fork(tweetsSaga), fork(topicsSaga), fork(tweetSaga), fork(recommendedSaga)]);
}

export default rootSaga;
