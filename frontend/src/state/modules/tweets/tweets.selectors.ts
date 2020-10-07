import { createSelector } from 'reselect';
import { RootState } from '../rootReducer';
import { TweetsState } from './tweets.types';

export const getTweets = (state: RootState): TweetsState => state.tweets;
export const getTweetsItems = createSelector(getTweets, (tweets) => tweets.data);
