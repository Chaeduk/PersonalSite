import React from 'react';
import { useSelector } from 'react-redux';
import AuthNav from '../components/Header/AuthNav';

const AuthNavContainer = () => {
  const { loginSuccess, user } = useSelector(({ auth }) => ({
    loginSuccess: auth.loginSuccess,
    user: auth.user,
  }));
  return <AuthNav loginSuccess={loginSuccess} user={user} />;
};

export default React.memo(AuthNavContainer);
