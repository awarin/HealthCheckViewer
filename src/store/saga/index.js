import { fork, call } from 'redux-saga/effects';
import ServiceStatusSaga from './serviceStatus';
import ServiceSaga from './service';

function* bootstrapSaga() {
  yield call(ServiceSaga);
  yield fork(ServiceStatusSaga);
}

export default bootstrapSaga;
