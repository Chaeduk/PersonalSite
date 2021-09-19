import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import auth from './auth';
import loading from './loading';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

const rootReducer = combineReducers({
  auth,
  loading,
});

export default persistReducer(persistConfig, rootReducer);
