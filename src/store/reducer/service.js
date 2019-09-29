import { handleActions } from 'redux-actions';
import { actionTypes } from '../action/services';

const addServiceList = (state, { payload }) => [
  ...payload
];

export default handleActions(
  {
    [actionTypes.ADD_SERVICES_LIST]: addServiceList
  },
  []
);
