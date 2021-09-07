import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import * as api from '../lib/api/auth';
import createRequestThunk from '../lib/createRequestThunk';

const CHANGE_INPUT = 'auth/CHANGE_INPUT';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

const DO_SIGNUP = 'auth/DO_SIGNUP';
const DO_SIGNUP_SUCCESS = 'auth/DO_SIGNUP_SUCCESS';

export const changeInput = createAction(CHANGE_INPUT, ({ form, data }) => ({
  form,
  data,
}));

export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);

export const doSignup = createRequestThunk(DO_SIGNUP, api.signup);

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
  },
  initalState,
);

export default auth;
