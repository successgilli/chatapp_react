// third-party libraries
import { takeLatest } from 'redux-saga/effects';

// types
import {
  USER_SIGNUP,
} from './types';

export function* fetchLogin() {
  yield 'here';
}

export function* watchLoginRequests() {
  yield takeLatest(USER_SIGNUP, fetchLogin);
}

const initialState = {
  user: {},
  loginError: {},
  isLoggedIn: 'false',
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGNUP:
      return {
        loginError: {},
        user: action.payload,
        isLoggedIn: 'true',
      };
    default:
      return state;
  }
};
