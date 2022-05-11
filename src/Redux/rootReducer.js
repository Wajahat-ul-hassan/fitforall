import {combineReducers} from 'redux';
import authReducers from './reducers/authReducers';
import registerReducer from './reducers/registerReducer';

export default combineReducers({
  authReducers,
  registerReducer,
});
