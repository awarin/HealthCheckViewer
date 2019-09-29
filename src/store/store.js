import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer';
import bootstrapSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

export default createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(bootstrapSaga);
