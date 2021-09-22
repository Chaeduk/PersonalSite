import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import * as api from '../lib/api/auth';
import createRequestThunk from '../lib/createRequestThunk';

const CHANGE_INPUT = 'post/CHANGE_INPUT';
const INITIALIZE_POST = 'post/INITIALIZE_POST';

const GET_CONTENT = 'post/GET_CONTENT';
const GET_CONTENT_SUCCESS = 'post/GET_CONTENT_SUCCESS';

export const changeInput = createAction(CHANGE_INPUT, ({ form, data }) => ({
  form,
  data,
}));

export const initializePost = createAction(INITIALIZE_POST, (form) => form);

export const getContent = createRequestThunk(GET_CONTENT, api.getContent);

const initialState = {
  write: {
    title: '',
    content: '',
  },
  content: {
    title: '',
    content: '',
    nickname: '',
  },
};

const post = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: { form, data } }) =>
      produce(state, (draft) => {
        draft[form][data.name] = data.value;
      }),
    [INITIALIZE_POST]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
    }),
    [GET_CONTENT_SUCCESS]: (state, { payload: { content } }) =>
      produce(state, (draft) => {
        draft.content.title = content.title;
        draft.content.content = content.content;
        draft.content.nickname = content.nickname;
      }),
  },
  initialState,
);

export default post;
