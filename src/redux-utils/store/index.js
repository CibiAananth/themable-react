import { configureStore } from '@reduxjs/toolkit';
// middlewares
import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { createLogger } from 'redux-logger';
import { crashReporterMiddleware } from 'redux-utils/middlewares';
// redux-utils
import rootReducer from 'redux-utils/reducers';
import rootSaga from 'redux-utils/sagas';
import SetTransform from 'redux-utils/store/transforms';

// middleware config
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['authStore'], // only authStore will be persisted,
  transforms: [SetTransform]
};

const logger = createLogger({
  predicate: (_getState, action) =>
    !action.type.includes('@@redux-form') &&
    !action.type.includes('@@saga-network-status')
});

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, crashReporterMiddleware()];

if (process.env.NODE_ENV !== 'production') middleware.unshift(logger);

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production'
});
persistStore(store);

sagaMiddleware.run(rootSaga);

export default store;
