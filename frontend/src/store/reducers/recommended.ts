import {
    RecommendedState,
    RecommendedActionTypes,
    FETCH_RECOMMENDED_REQUEST,
    FETCH_RECOMMENDED_SUCCESS,
    FETCH_RECOMMENDED_FAILURE,
} from '../types/recommended';

const initialState: RecommendedState = {
    loading: false,
    users: [],
    error: null,
};

export function recommendedReducer(
    state = initialState,
    action: RecommendedActionTypes,
): RecommendedState {
    switch (action.type) {
        case FETCH_RECOMMENDED_REQUEST:
            return { ...state, loading: true, users: initialState.users, error: null };
        case FETCH_RECOMMENDED_SUCCESS:
            return { ...state, loading: false, users: action.payload };
        case FETCH_RECOMMENDED_FAILURE:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
}
