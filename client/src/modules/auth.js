import { createAction, handleActions } from 'redux-actions';
import { startLoading, finishLoading } from './loading';
import produce from 'immer';
import * as api from '../lib/api/auth';
import createRequestThunk from '../lib/createRequestThunk';
import client from '../lib/api/client';

const CHANGE_INPUT = 'auth/CHANGE_INPUT';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

const DO_SIGNUP = 'auth/DO_SIGNUP';
const DO_SIGNUP_SUCCESS = 'auth/DO_SIGNUP_SUCCESS';

const DO_DOUBLECHECK = 'auth/DO_DOUBLECHECK';
const DO_DOUBLECHECK_SUCCESS = 'auth/DO_DOUBLECHECK_SUCCESS';

const DO_LOGIN = 'auth/DO_LOGIN';
const DO_LOGIN_SUCCESS = 'auth/DO_LOGIN_SUCCESS';
const DO_LOGIN_FAILURE = 'auth/DO_LOGIN_FAILURE';

const DO_LOGOUT = 'auth/DO_LOGOUT';
const DO_LOGOUT_SUCCESS = 'auth/DO_LOGOUT_SUCCESS';
const DO_LOGOUT_FAILURE = 'auth/DO_LOGOUT_FAILURE';

export const changeInput = createAction(CHANGE_INPUT, ({ form, data }) => ({
  form,
  data,
}));

export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);

export const doSignup = createRequestThunk(DO_SIGNUP, api.signup);
export const doDoublecheck = createRequestThunk(
  DO_DOUBLECHECK,
  api.doublecheck,
);
export const doLogin = (params) => async (dispatch) => {
  dispatch(startLoading(DO_LOGIN));
  try {
    const response = await api.login(params);
    client.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${response.data.acessToken}`;
    dispatch({
      type: DO_LOGIN_SUCCESS,
      payload: response.data,
    });
    dispatch(finishLoading(DO_LOGIN));
  } catch (e) {
    dispatch({
      type: DO_LOGIN_FAILURE,
      payload: e,
      error: true,
    });
    dispatch(startLoading(DO_LOGIN));
    throw e;
  }
};

export const doLogout = () => async (dispatch) => {
  dispatch(startLoading(DO_LOGOUT));
  try {
    await api.logout();
    api.resetToken();
    dispatch({
      type: DO_LOGOUT_SUCCESS,
    });
    dispatch(finishLoading(DO_LOGOUT));
  } catch (e) {
    dispatch({
      type: DO_LOGOUT_FAILURE,
      payload: e,
      error: true,
    });
    dispatch(startLoading(DO_LOGOUT));
    throw e;
  }
};

const initalState = {
  register: {
    id: '',
    nickname: '',
    password: '',
    passwordConfirm: '',
  },
  login: {
    id: '',
    password: '',
  },
  res: '',
  loginSuccess: false,
  user: {
    id: '',
    nickname: '',
  },
};

const auth = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: { form, data } }) =>
      produce(state, (draft) => {
        draft[form][data.name] = data.value;
      }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initalState[form],
    }),
    [DO_SIGNUP_SUCCESS]: (state, { payload: res }) => ({
      ...state,
      res: res,
    }),
    [DO_DOUBLECHECK_SUCCESS]: (state, { payload: res }) => ({
      ...state,
      res: res,
    }),
    [DO_LOGIN_SUCCESS]: (
      state,
      { payload: { loginSuccess, id, nickname, msg } },
    ) => ({
      ...state,
      res: msg,
      user: { id, nickname },
      loginSuccess: loginSuccess,
    }),
    [DO_LOGOUT_SUCCESS]: (state) => ({
      ...state,
      loginSuccess: false,
      user: { id: '', nickname: '' },
    }),
  },
  initalState,
);

export default auth;
