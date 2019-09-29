import { combineReducers } from 'redux';
import service from './service';
import serviceStatus from './serviceStatus';

export default combineReducers({ service, serviceStatus });
