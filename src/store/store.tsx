import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './root-saga';
import { rootReducer } from './root.reducer';

export type RootStateTP = ReturnType<typeof rootReducer>;

const persistConfig = {
  key: 'root',
  storage,
};
const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [logger, sagaMiddleware];

const composedEnhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);
// export const store = createStore(persistedReducer, undefined, composedEnhancers);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
