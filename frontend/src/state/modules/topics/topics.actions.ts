import {
    FETCH_TOPICS,
    FETCH_TOPICS_REQUEST,
    FETCH_TOPICS_SUCCESS,
    FETCH_TOPICS_FAILURE,
    Topics,
} from './topics.types';

export function fetchTopics() {
    return {
        type: FETCH_TOPICS,
    } as const;
}

export function fetchTopicsRequest() {
    return {
        type: FETCH_TOPICS_REQUEST,
    } as const;
}

export function fetchTopicsSuccess(topics: Topics) {
    return {
        type: FETCH_TOPICS_SUCCESS,
        payload: topics,
    } as const;
}

export function fetchTopicsFailure(error: Error | null) {
    return {
        type: FETCH_TOPICS_FAILURE,
        payload: error,
    } as const;
}
