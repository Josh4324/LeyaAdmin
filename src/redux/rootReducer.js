import { combineReducers } from 'redux';
import AuthReducer from './Auth/authReducer';

export default combineReducers({
  auth: AuthReducer,
});
