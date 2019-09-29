import { all, call, fork, delay, put, select } from 'redux-saga/effects';
import HealthApi from '../../service/healthApi';
import { addStatuses } from '../action/serviceStatus';
import { selectServices } from '../selector/service';

function* queryServiceStatus(service) {
  const data = yield call(HealthApi.getServiceStatuses, service);

  yield put(addStatuses({
    service,
    data
  }));
}

function* refreshStatuses() {
  while (true) {
    try {
      const servicesWithStatus = yield select(selectServices);
      yield all(servicesWithStatus.map((service) => fork(queryServiceStatus, service)));
    } catch (error) {
      global.console.log(error);
    }
    yield delay(10000);
  }
}

export default refreshStatuses;
