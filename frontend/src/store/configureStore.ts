import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers/rootReducer';

function configureStore(initialState = {}) {
    const sagaMiddleware = createSagaMiddleware();

    return {
        ...createStore(
            rootReducer,
            initialState,
            composeWithDevTools(applyMiddleware(sagaMiddleware)),
        ),
        runSaga: sagaMiddleware.run,
    };
}

export default configureStore;
