import { takeEvery, put, call } from 'redux-saga/effects';
import {
    fetchRecommendedRequest,
    fetchRecommendedSuccess,
    fetchRecommendedFailure,
} from './recommended.actions';
import { FETCH_RECOMMENDED } from './recommended.types';
import { fetchRecommendedApi } from '../../../services/api';

function* fetchRecommended() {
    try {
        yield put(fetchRecommendedRequest());
        const users = yield call(fetchRecommendedApi);
        yield put(fetchRecommendedSuccess(users.data));
    } catch (error) {
        yield put(fetchRecommendedFailure(error));
    }
}

export function* recommendedSaga() {
    yield takeEvery(FETCH_RECOMMENDED, fetchRecommended);
}
