import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const CHANGE_INPUT = 'auth/CHANGE_INPUT';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

export const changeInput = createAction(CHANGE_INPUT, ({ form, data }) => ({
  form,
  data,
}));

export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);

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
  },
  initalState,
);

export default auth;
