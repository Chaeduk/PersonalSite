import client from './client';

export const signup = ({ id, nickname, password }) =>
  client.post('/api/auth/signup', { id, nickname, password });
