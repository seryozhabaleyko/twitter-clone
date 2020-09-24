import {
    TopicsState,
    TopicsActionTypes,
    FETCH_TOPICS_REQUEST,
    FETCH_TOPICS_SUCCESS,
    FETCH_TOPICS_FAILURE,
} from '../types/topics';

const initialState: TopicsState = {
    loading: false,
    data: [],
    error: null,
};

export function topicsReducer(state = initialState, action: TopicsActionTypes): TopicsState {
    switch (action.type) {
        case FETCH_TOPICS_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_TOPICS_SUCCESS:
            return { ...state, loading: false, data: action.payload };
        case FETCH_TOPICS_FAILURE:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
}
