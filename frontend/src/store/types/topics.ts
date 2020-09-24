import {
    fetchTopics,
    fetchTopicsFailure,
    fetchTopicsRequest,
    fetchTopicsSuccess,
} from '../actions/topics';

export const FETCH_TOPICS = 'FETCH_TOPICS';
export const FETCH_TOPICS_REQUEST = 'FETCH_TOPICS_REQUEST';
export const FETCH_TOPICS_SUCCESS = 'FETCH_TOPICS_SUCCESS';
export const FETCH_TOPICS_FAILURE = 'FETCH_TOPICS_FAILURE';

export interface Topic {
    topic: string;
    name: string;
    tweet_value: number;
}

export type Topics = Topic[];

export interface TopicsState {
    loading: boolean;
    data: Topics;
    error: Error | null;
}

export type FetchTopics = ReturnType<typeof fetchTopics>;

export type TopicsActionTypes =
    | ReturnType<typeof fetchTopicsRequest>
    | ReturnType<typeof fetchTopicsSuccess>
    | ReturnType<typeof fetchTopicsFailure>;
