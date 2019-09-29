import { call, put } from 'redux-saga/effects';
import HealthApi from '../../service/healthApi';
import { addServicesList } from '../action/services';

function* queryServiceStatus() {
  const serviceList = yield call(HealthApi.getServiceList);

  yield put(addServicesList(serviceList));
}

export default queryServiceStatus;
