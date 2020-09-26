import {
    Users,
    FETCH_RECOMMENDED,
    FETCH_RECOMMENDED_REQUEST,
    FETCH_RECOMMENDED_SUCCESS,
    FETCH_RECOMMENDED_FAILURE,
} from '../types/recommended';

export function fetchRecommended() {
    return {
        type: FETCH_RECOMMENDED,
    } as const;
}

export function fetchRecommendedRequest() {
    return {
        type: FETCH_RECOMMENDED_REQUEST,
    } as const;
}

export function fetchRecommendedSuccess(users: Users) {
    return {
        type: FETCH_RECOMMENDED_SUCCESS,
        payload: users,
    } as const;
}

export function fetchRecommendedFailure(error: Error) {
    return {
        type: FETCH_RECOMMENDED_FAILURE,
        payload: error,
    } as const;
}
