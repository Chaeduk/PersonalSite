import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const CHANGE_INPUT = 'auth/CHANGE_INPUT';

export const changeInput = createAction(CHANGE_INPUT, ({ form, data }) => ({
  form,
  data,
}));

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
    [CHANGE_INPUT]: (state, { payload: { form, data } }) => {
      produce(state, (draft) => {
        draft[form][data.name] = data.value;
      });
    },
  },
  initalState,
);

export default auth;
