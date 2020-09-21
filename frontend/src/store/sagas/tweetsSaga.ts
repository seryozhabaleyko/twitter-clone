import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_TWEETS } from '../types/tweets';
import { fetchTweetsRequest, fetchTweetsSuccess, fetchTweetsFailure } from '../actions/tweets';

function* fetchTweets() {
    try {
        yield put(fetchTweetsRequest());
        const tweets = yield call(() => {});
        yield put(fetchTweetsSuccess(tweets));
    } catch (error) {
        yield put(fetchTweetsFailure(error));
    }
}

function* tweetsSaga() {
    yield takeEvery(FETCH_TWEETS, fetchTweets);
}

export default tweetsSaga;
