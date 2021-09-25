import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import * as api from '../lib/api/auth';
import createRequestThunk from '../lib/createRequestThunk';

const INITALIZE_PAGE = 'page/INITIALIZE_POST';

const CONVERT_PAGE = 'page/CHANGE_PAGE';
const BEFORE_PAGING = 'page/BEFORE_PAGING';
const NEXT_PAGING = 'page/NEXT_PAGING';
const SET_PAGING = 'page/SET_PAGING';

const GET_POSTS = 'page/GET_POSTS';
const GET_POSTS_SUCCESS = 'page/GET_POSTS_SUCCESS';

const GET_MY_POSTS = 'page/GET_MY_POSTS';
const GET_MY_POSTS_SUCCESS = 'page/GET_MY_POSTS_SUCCESS';

export const initalizePage = createAction(INITALIZE_PAGE, (form) => form);
export const convertPage = createAction(CONVERT_PAGE);
export const beforePaging = createAction(BEFORE_PAGING);
export const nextPaging = createAction(NEXT_PAGING);
export const setPaging = createAction(SET_PAGING);
export const getPosts = createRequestThunk(GET_POSTS, api.getPosts);
export const getMyPosts = createRequestThunk(GET_MY_POSTS, api.getMyPosts);

const initialState = {
  posts: [],
  currentPage: 1,
  currentPaging: 1,
  maxPagelength: 1,
  currentPosts: [],
  myPosts: [],
};

const page = handleActions(
  {
    [INITALIZE_PAGE]: (state, { payload: form }) =>
      produce(state, (draft) => {
        draft[form] = initialState[form];
      }),
    [CONVERT_PAGE]: (state, { payload: index }) =>
      produce(state, (draft) => {
        draft.currentPosts =
          state.posts.length === 0 ? [] : state.posts[index - 1];
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
    [GET_POSTS_SUCCESS]: (state, { payload: { posts } }) =>
      produce(state, (draft) => {
        draft.posts = posts;
        draft.currentPosts = posts.length === 0 ? [] : posts[0];
        draft.maxPagelength = posts.length === 0 ? 1 : posts.length;
      }),
    [GET_MY_POSTS_SUCCESS]: (state, { payload: { posts } }) =>
      produce(state, (draft) => {
        draft.myPosts = posts;
      }),
  },
  initialState,
);

export default page;
