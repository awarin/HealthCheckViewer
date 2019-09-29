import { handleActions } from 'redux-actions';
import { actionTypes } from '../action/serviceStatus';

const addStatuses = (state, { payload }) => {
  const { service, data } = payload;

  return {
    ...state,
    [service]: data
  };
};

export default handleActions(
  {
    [actionTypes.ADD_STATUSES]: addStatuses
  },
  {}
);
