import client from './client';

export const signup = ({ id, nickname, password }) =>
  client.post('/auth/signup', { id, nickname, password });
