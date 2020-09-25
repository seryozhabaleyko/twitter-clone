import { FETCH_TWEET_SUCCESS } from './../types/tweet';
import {
    TweetsState,
    TweetsActionTypes,
    FETCH_TWEETS_REQUEST,
    FETCH_TWEETS_SUCCESS,
    FETCH_TWEETS_FAILURE,
} from '../types/tweets';

const initialState: TweetsState = {
    loading: false,
    data: [],
    error: null,
};

export function tweetsReducer(state = initialState, action: TweetsActionTypes): TweetsState {
    switch (action.type) {
        case FETCH_TWEETS_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_TWEETS_SUCCESS:
            return { ...state, loading: false, data: action.payload };
        case FETCH_TWEETS_FAILURE:
            return { ...state, loading: false, error: action.payload };

        /* case FETCH_TWEET_SUCCESS:
            return { ...state, data: [...state.data, action.payload] }; */
        default:
            return state;
    }
}
