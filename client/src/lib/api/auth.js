import client from './client';

export const signup = ({ id, nickname, password }) =>
  client.post('/api/auth/signup', { id, nickname, password });

export const doublecheck = (id) => client.post('/api/auth/doublecheck', { id });

export const login = ({ id, password }) =>
  client.post('/api/auth/login', { id, password });

export const logout = () => client.post('/api/auth/logout');

export const write = ({ title, content }) =>
  client.post('/api/post/write', { title, content });

export const getPosts = () => client.get('/api/post');

export const getContent = (id) => client.get(`/api/post/content/${id}`);

export const getMyPosts = (id) => client.get(`/api/post/myposts/${id}`);

export const deletePost = (id) => client.delete(`/api/post/delete/${id}`);

export const editPost = ({ id, title, content }) =>
  client.patch(`/api/post/edit/${id}`, { title, content });

export const resetToken = () => {
  client.defaults.headers.common['Authorization'] = '';
};
