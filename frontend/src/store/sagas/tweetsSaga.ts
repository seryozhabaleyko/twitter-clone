import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_TWEETS } from '../types/tweets';
import { fetchTweetsRequest, fetchTweetsSuccess, fetchTweetsFailure } from '../actions/tweets';
import { fetchTweetsApi } from '../../services/api';

function* fetchTweets() {
    try {
        yield put(fetchTweetsRequest());
        const tweets = yield call(fetchTweetsApi);
        yield put(fetchTweetsSuccess(tweets.data));
    } catch (error) {
        yield put(fetchTweetsFailure(error));
    }
}

export function* tweetsSaga() {
    yield takeEvery(FETCH_TWEETS, fetchTweets);
}
