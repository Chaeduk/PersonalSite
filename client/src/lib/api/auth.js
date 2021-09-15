import client from './client';

export const signup = ({ id, nickname, password }) =>
  client.post('/api/auth/signup', { id, nickname, password });

export const doublecheck = (id) => client.post('/api/auth/doublecheck', { id });
