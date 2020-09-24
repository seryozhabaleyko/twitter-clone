import { createSelector } from 'reselect';
import { RootState } from './../reducers/rootReducer';
import { TweetsState } from './../types/tweets';

export const getTweets = (state: RootState): TweetsState => state.tweets;
export const getTweetsItems = createSelector(getTweets, (tweets) => tweets.data);
