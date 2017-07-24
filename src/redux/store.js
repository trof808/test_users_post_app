import { createStore, combineReducers } from 'redux';
import {usersReducer, postsReducer} from './reducers';

const reducers = combineReducers({
  usersReducer,
  postsReducer
});

export const store = createStore(reducers);

