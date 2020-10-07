import { all, fork } from 'redux-saga/effects';

import { tweetsSaga } from './tweets/tweets.saga';
import { topicsSaga } from './topics/topics.saga';
import { tweetSaga } from './tweet/tweet.saga';
import { recommendedSaga } from './recommended/recommended.saga';

function* rootSaga() {
    yield all([fork(tweetsSaga), fork(topicsSaga), fork(tweetSaga), fork(recommendedSaga)]);
}

export { rootSaga };
