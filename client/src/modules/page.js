import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
const CONVERT_PAGE = 'page/CHANGE_PAGE';
const BEFORE_PAGING = 'page/BEFORE_PAGING';
const NEXT_PAGING = 'page/NEXT_PAGING';
const SET_PAGING = 'page/SET_PAGING';

export const convertPage = createAction(CONVERT_PAGE);
export const beforePaging = createAction(BEFORE_PAGING);
export const nextPaging = createAction(NEXT_PAGING);
export const setPaging = createAction(SET_PAGING);

const initialState = {
  posts: [],

  currentPage: 1,
  currentPaging: 1,

  maxPagelength: 1,

  currentPosts: [],
};

const page = handleActions(
  {
    [CONVERT_PAGE]: (state, { payload: index }) =>
      produce(state, (draft) => {
        draft.currentPosts = state.posts[index - 1];
        draft.currentPage = index;
      }),
    [BEFORE_PAGING]: (state) =>
      produce(state, (draft) => {
        draft.currentPage = 5 * (state.currentPaging - 1);
        draft.currentPaging = state.currentPaging - 1;
      }),
    [NEXT_PAGING]: (state) =>
      produce(state, (draft) => {
        draft.currentPage = 5 * state.currentPaging + 1;
        draft.currentPaging = state.currentPaging + 1;
      }),
    [SET_PAGING]: (state, { payload: index }) =>
      produce(state, (draft) => {
        draft.currentPaging = index;
      }),
  },
  initialState,
);

export default page;
