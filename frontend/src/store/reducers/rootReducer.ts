import { combineReducers } from 'redux';

import { tweetsReducer } from './tweets';
import { topicsReducer } from './topics';
import { tweetReducer } from './tweet';

const rootReducer = combineReducers({
    tweets: tweetsReducer,
    topics: topicsReducer,
    tweet: tweetReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
