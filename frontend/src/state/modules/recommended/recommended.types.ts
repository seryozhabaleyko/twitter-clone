import {
    fetchRecommended,
    fetchRecommendedRequest,
    fetchRecommendedSuccess,
    fetchRecommendedFailure,
} from './recommended.actions';

export const FETCH_RECOMMENDED = 'FETCH_RECOMMENDED';
export const FETCH_RECOMMENDED_REQUEST = 'FETCH_RECOMMENDED_REQUEST';
export const FETCH_RECOMMENDED_SUCCESS = 'FETCH_RECOMMENDED_SUCCESS';
export const FETCH_RECOMMENDED_FAILURE = 'FETCH_RECOMMENDED_FAILURE';

export interface User {
    id: string;
    name: string;
    nickname: string;
    avatarUrl: string;
}

export type Users = User[];

export type FetchRecommended = ReturnType<typeof fetchRecommended>;

export interface RecommendedState {
    loading: boolean;
    users: Users;
    error: Error | null;
}

export type RecommendedActionTypes =
    | ReturnType<typeof fetchRecommendedRequest>
    | ReturnType<typeof fetchRecommendedSuccess>
    | ReturnType<typeof fetchRecommendedFailure>;
