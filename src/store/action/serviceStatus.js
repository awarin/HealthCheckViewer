import { createAction } from 'redux-actions';

const actionTypes = {
  ADD_STATUSES: 'SERVICE_STATUS::ADD_STATUSES'
};

const addStatuses = createAction(actionTypes.ADD_STATUSES);

export {
  addStatuses,
  actionTypes
};
