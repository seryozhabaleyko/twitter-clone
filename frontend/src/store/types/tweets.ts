import {
    fetchTweets,
    fetchTweetsRequest,
    fetchTweetsSuccess,
    fetchTweetsFailure,
} from '../actions/tweets';

export interface Tweet {}
export type Tweets = Tweet[];

export interface TweetsState {
    loading: boolean;
    data: Tweets;
    error: Error | null;
}

export const FETCH_TWEETS = 'FETCH_TWEETS';
export type FetchTweets = ReturnType<typeof fetchTweets>;

export const FETCH_TWEETS_REQUEST = 'FETCH_TWEETS_REQUEST';
export const FETCH_TWEETS_SUCCESS = 'FETCH_TWEETS_SUCCESS';
export const FETCH_TWEETS_FAILURE = 'FETCH_TWEETS_FAILURE';

export type TweetsActionTypes =
    | ReturnType<typeof fetchTweetsRequest>
    | ReturnType<typeof fetchTweetsSuccess>
    | ReturnType<typeof fetchTweetsFailure>;
