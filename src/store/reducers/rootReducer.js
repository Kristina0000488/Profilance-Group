import { combineReducers } from 'redux';

import newsReducer         from './newsReducer';
import authReducer         from './authReducer';


const createRootReducer = () => combineReducers({
  authReducer,
  newsReducer,
});

export default createRootReducer;

