import {
    addTweet,
    addTweetRequest,
    addTweetSuccess,
    addTweetFailure,
    fetchTweet,
    fetchTweetRequest,
    fetchTweetSuccess,
    fetchTweetFailure,
} from '../actions/tweet';

export const ADD_TWEET = 'ADD_TWEET';
export const ADD_TWEET_REQUEST = 'ADD_TWEET_REQUEST';
export const ADD_TWEET_SUCCESS = 'ADD_TWEET_SUCCESS';
export const ADD_TWEET_FAILURE = 'ADD_TWEET_FAILURE';

export const FETCH_TWEET = 'FETCH_TWEET';
export const FETCH_TWEET_REQUEST = 'FETCH_TWEET_REQUEST';
export const FETCH_TWEET_SUCCESS = 'FETCH_TWEET_SUCCESS';
export const FETCH_TWEET_FAILURE = 'FETCH_TWEET_FAILURE';

export interface Tweet {
    id: string;
    text: string;
    user: {
        name: string;
        nickname: string;
        avatarUrl: string;
    };
}

export interface TweetState {
    loading: boolean;
    data: Tweet;
    error: Error | null;
}

export type AddTweet = ReturnType<typeof addTweet>;
export type FetchTweet = ReturnType<typeof fetchTweet>;

export type TweetsActionTypes =
    | ReturnType<typeof addTweetRequest>
    | ReturnType<typeof addTweetSuccess>
    | ReturnType<typeof addTweetFailure>
    | ReturnType<typeof fetchTweetRequest>
    | ReturnType<typeof fetchTweetSuccess>
    | ReturnType<typeof fetchTweetFailure>;
