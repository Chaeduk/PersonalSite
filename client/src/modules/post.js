import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const CHANGE_INPUT = 'post/CHANGE_INPUT';
const INITIALIZE_FORM = 'post/INITIALIZE_FORM';

export const changeInput = createAction(CHANGE_INPUT, ({ form, data }) => ({
  form,
  data,
}));

export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);

const initialState = {
  write: {
    title: '',
    content: '',
  },
};

const post = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: { form, data } }) =>
      produce(state, (draft) => {
        draft[form][data.name] = data.value;
      }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
    }),
  },
  initialState,
);

export default post;
