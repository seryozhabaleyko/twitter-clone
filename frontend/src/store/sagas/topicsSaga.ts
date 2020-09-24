import { takeEvery, put, call } from 'redux-saga/effects';
import { FETCH_TOPICS } from '../types/topics';
import { fetchTopicsRequest, fetchTopicsSuccess, fetchTopicsFailure } from '../actions/topics';
import { fetchTopicsApi } from '../../services/api';

function* fetchTopics() {
    try {
        yield put(fetchTopicsRequest());
        const topics = yield call(fetchTopicsApi);
        yield put(fetchTopicsSuccess(topics.data));
    } catch (error) {
        yield put(fetchTopicsFailure(error));
    }
}

export function* topicsSaga() {
    yield takeEvery(FETCH_TOPICS, fetchTopics);
}
