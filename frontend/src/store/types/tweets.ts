import {
    fetchTweets,
    fetchTweetsRequest,
    fetchTweetsSuccess,
    fetchTweetsFailure,
} from '../actions/tweets';
import { fetchTweetSuccess } from '../actions/tweet';

export const FETCH_TWEETS = 'FETCH_TWEETS';
export const FETCH_TWEETS_REQUEST = 'FETCH_TWEETS_REQUEST';
export const FETCH_TWEETS_SUCCESS = 'FETCH_TWEETS_SUCCESS';
export const FETCH_TWEETS_FAILURE = 'FETCH_TWEETS_FAILURE';

export interface Tweet {
    _id: string;
    text: string;
    user: {
        fullname: string;
        username: string;
        avatarUrl: string;
    };
}
export type Tweets = Tweet[];

export interface TweetsState {
    loading: boolean;
    data: Tweets;
    error: Error | null;
}

export type FetchTweets = ReturnType<typeof fetchTweets>;

export type TweetsActionTypes =
    | ReturnType<typeof fetchTweetsRequest>
    | ReturnType<typeof fetchTweetsSuccess>
    | ReturnType<typeof fetchTweetsFailure>
    | ReturnType<typeof fetchTweetSuccess>;
