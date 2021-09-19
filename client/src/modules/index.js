import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import auth from './auth';
import loading from './loading';
import post from './post';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

const rootReducer = combineReducers({
  auth,
  loading,
  post,
});

export default persistReducer(persistConfig, rootReducer);
