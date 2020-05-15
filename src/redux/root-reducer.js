import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import jarReducer from './jar/jar.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['transaction']
};

const rootReducer = combineReducers({
  transaction: jarReducer,
});

export default persistReducer(persistConfig, rootReducer);