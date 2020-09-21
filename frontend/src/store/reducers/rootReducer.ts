import { combineReducers } from 'redux';

import tweetsReducer from './tweets';

const rootReducer = combineReducers({
    tweets: tweetsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
