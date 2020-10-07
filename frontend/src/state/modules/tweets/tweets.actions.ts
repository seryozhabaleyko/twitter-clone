import {
    Tweets,
    FETCH_TWEETS,
    FETCH_TWEETS_REQUEST,
    FETCH_TWEETS_SUCCESS,
    FETCH_TWEETS_FAILURE,
} from './tweets.types';

export function fetchTweets() {
    return {
        type: FETCH_TWEETS,
    } as const;
}

export function fetchTweetsRequest() {
    return {
        type: FETCH_TWEETS_REQUEST,
    } as const;
}

export function fetchTweetsSuccess(tweets: Tweets) {
    return {
        type: FETCH_TWEETS_SUCCESS,
        payload: tweets,
    } as const;
}

export function fetchTweetsFailure(error: Error | null) {
    return {
        type: FETCH_TWEETS_FAILURE,
        payload: error,
    } as const;
}
