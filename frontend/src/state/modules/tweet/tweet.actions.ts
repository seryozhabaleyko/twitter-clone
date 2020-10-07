import {
    Tweet,
    ADD_TWEET,
    ADD_TWEET_REQUEST,
    ADD_TWEET_SUCCESS,
    ADD_TWEET_FAILURE,
    FETCH_TWEET,
    FETCH_TWEET_REQUEST,
    FETCH_TWEET_SUCCESS,
    FETCH_TWEET_FAILURE,
} from './tweet.types';

export function addTweet(tweet: Tweet) {
    return {
        type: ADD_TWEET,
        tweet,
    } as const;
}

export function addTweetRequest() {
    return {
        type: ADD_TWEET_REQUEST,
    } as const;
}

export function addTweetSuccess(tweet: Tweet) {
    return {
        type: ADD_TWEET_SUCCESS,
        payload: tweet,
    } as const;
}

export function addTweetFailure(error: Error) {
    return {
        type: ADD_TWEET_FAILURE,
        payload: error,
    } as const;
}

export function fetchTweet(id: Tweet['_id']) {
    return {
        type: FETCH_TWEET,
        id,
    } as const;
}

export function fetchTweetRequest() {
    return {
        type: FETCH_TWEET_REQUEST,
    } as const;
}

export function fetchTweetSuccess(tweet: Tweet) {
    return {
        type: FETCH_TWEET_SUCCESS,
        payload: tweet,
    } as const;
}

export function fetchTweetFailure(error: Error) {
    return {
        type: FETCH_TWEET_FAILURE,
        payload: error,
    } as const;
}
