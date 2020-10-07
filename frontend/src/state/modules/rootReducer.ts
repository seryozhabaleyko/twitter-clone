import { combineReducers } from 'redux';

import { tweetsReducer } from './tweets/tweets.reducer';
import { tweetReducer } from './tweet/tweet.reducer';
import { topicsReducer } from './topics/topics.reducer';
import { recommendedReducer } from './recommended/recommended.reducer';

export const rootReducer = combineReducers({
    tweets: tweetsReducer,
    tweet: tweetReducer,
    topics: topicsReducer,
    recommended: recommendedReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
