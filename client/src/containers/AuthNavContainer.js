import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import AuthNav from '../components/Header/AuthNav';
import { doLogout } from '../modules/auth';
import { useHistory } from 'react-router-dom';
import client from '../lib/api/client';
import { initalizePage } from '../modules/page';

const AuthNavContainer = ({
  user,
  loadingLogout,
  loginSuccess,
  doLogout,
  accessToken,
  initalizePage,
}) => {
  const history = useHistory();
  const onClick = () => {
    doLogout();
  };

  useEffect(() => {
    client.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  }, [accessToken]);

  useEffect(() => {
    if (loadingLogout && !loginSuccess) {
      initalizePage('myPosts');
      alert('로그아웃이 되었습니다.');
      history.push('/');
    }
  });

  return <AuthNav loginSuccess={loginSuccess} user={user} onClick={onClick} />;
};

const mapStateToProps = ({ auth, loading }) => ({
  user: auth.user,
  loadingLogout: loading['auth/DO_LOGOUT'],
  loginSuccess: auth.loginSuccess,
  accessToken: auth.accessToken,
});

const mapDispatchToProps = { doLogout, initalizePage };

export default connect(mapStateToProps, mapDispatchToProps)(AuthNavContainer);
