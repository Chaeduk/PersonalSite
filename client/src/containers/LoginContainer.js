import React, { useEffect } from 'react';
import Login from '../components/Login/Login';
import { connect } from 'react-redux';
import { changeInput, initializeForm, doLogin } from '../modules/auth';

const LoginContainer = ({
  id,
  password,
  changeInput,
  initializeForm,
  doLogin,
  loadingLogin,
  loginSuccess,
  res,
  history,
}) => {
  const onChangeInput = (e) => {
    changeInput({ form: 'login', data: e.target });
  };

  const onClick = () => {
    if (id === '' || password === '') {
      alert('로그인 정보를 입력해주세요.');
    } else {
      doLogin({ id, password });
    }
  };

  useEffect(() => {
    if (loginSuccess) {
      initializeForm('login');
      history.push('/');
    }
  }, [loginSuccess, history, initializeForm]);

  useEffect(() => {
    if (loginSuccess) {
      alert('이미 로그인되어있습니다.');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    initializeForm('login');
  }, [initializeForm]);

  useEffect(() => {
    if (loadingLogin && res !== '') {
      alert(res);
      initializeForm('res');
    }
  });

  return (
    <Login
      id={id}
      password={password}
      onChangeInput={onChangeInput}
      onClick={onClick}
    />
  );
};

const mapStateToProps = ({ auth, loading }) => ({
  id: auth.login.id,
  password: auth.login.password,
  loadingLogin: loading['auth/DO_LOGIN'],
  res: auth.res,
  loginSuccess: auth.loginSuccess,
});

const mapDispatchToProps = {
  changeInput,
  initializeForm,
  doLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
