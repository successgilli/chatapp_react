import { all } from 'redux-saga/effects';

import { watchLoginRequests } from './modules/login';

export default function* rootSaga() {
  yield all([
    watchLoginRequests(),
  ]);
}
