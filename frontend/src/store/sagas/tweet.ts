import { takeEvery, put, call } from 'redux-saga/effects';
import { AddTweet, ADD_TWEET } from './../types/tweet';
import { addTweetRequest, addTweetSuccess, addTweetFailure } from '../actions/tweet';
import { addTweetApi } from '../../services/api';

function* addTweet({ tweet }: AddTweet) {
    try {
        yield put(addTweetRequest());
        const tweetResponse = yield call(addTweetApi, tweet);
        console.log('tweet response', tweetResponse);

        yield put(addTweetSuccess(tweetResponse));
    } catch (error) {
        yield put(addTweetFailure(error));
    }
}

export function* tweetSaga() {
    yield takeEvery(ADD_TWEET, addTweet);
}
