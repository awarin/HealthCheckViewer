import { createAction } from 'redux-actions';

const actionTypes = {
  ADD_SERVICES_LIST: 'SERVICES::ADD_SERVICES_LIST'
};

const addServicesList = createAction(actionTypes.ADD_SERVICES_LIST);

export {
  addServicesList,
  actionTypes
};
