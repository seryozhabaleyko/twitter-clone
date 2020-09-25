import { takeEvery, put, call } from 'redux-saga/effects';
import { AddTweet, ADD_TWEET, FetchTweet, FETCH_TWEET } from './../types/tweet';
import {
    addTweetRequest,
    addTweetSuccess,
    addTweetFailure,
    fetchTweetRequest,
    fetchTweetSuccess,
    fetchTweetFailure,
} from '../actions/tweet';
import { addTweetApi, fetchTweetApi } from '../../services/api';

function* addTweet({ tweet }: AddTweet) {
    try {
        yield put(addTweetRequest());
        const response = yield call(addTweetApi, tweet);
        console.log('tweet response', response);

        yield put(addTweetSuccess(response.data));
    } catch (error) {
        yield put(addTweetFailure(error));
    }
}

function* fetchTweet({ id }: FetchTweet) {
    try {
        yield put(fetchTweetRequest());
        const tweet = yield call(fetchTweetApi, id);
        yield put(fetchTweetSuccess(tweet[0]));
    } catch (error) {
        yield put(fetchTweetFailure(error));
    }
}

export function* tweetSaga() {
    yield takeEvery(ADD_TWEET, addTweet);
    yield takeEvery(FETCH_TWEET, fetchTweet);
}
