import { combineReducers } from 'redux';

import { tweetsReducer } from './tweets';
import { topicsReducer } from './topics';
import { tweetReducer } from './tweet';
import { recommendedReducer } from './recommended';

const rootReducer = combineReducers({
    tweets: tweetsReducer,
    topics: topicsReducer,
    tweet: tweetReducer,
    recommended: recommendedReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
