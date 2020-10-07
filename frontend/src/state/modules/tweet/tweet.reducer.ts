import {
    TweetState,
    TweetsActionTypes,
    ADD_TWEET_REQUEST,
    ADD_TWEET_SUCCESS,
    ADD_TWEET_FAILURE,
    FETCH_TWEET_REQUEST,
    FETCH_TWEET_SUCCESS,
    FETCH_TWEET_FAILURE,
} from './tweet.types';

const initialState: TweetState = {
    loading: false,
    data: {
        _id: '',
        text: '',
        author: {
            name: '',
            surname: '',
            username: '',
            avatarUrl: '',
        },
    },
    error: null,
};

export function tweetReducer(state = initialState, action: TweetsActionTypes): TweetState {
    switch (action.type) {
        case ADD_TWEET_REQUEST:
            return { ...state, loading: true, data: initialState.data, error: null };
        case ADD_TWEET_SUCCESS:
            return { ...state, loading: false };
        case ADD_TWEET_FAILURE:
            return { ...state, loading: false, error: action.payload };

        case FETCH_TWEET_REQUEST:
            return { ...state, loading: true, data: initialState.data, error: null };
        case FETCH_TWEET_SUCCESS:
            return { ...state, loading: false, data: action.payload };
        case FETCH_TWEET_FAILURE:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
}
