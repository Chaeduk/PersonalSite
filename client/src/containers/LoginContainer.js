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
    initializeForm('login');
  }, [initializeForm]);

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
});

const mapDispatchToProps = {
  changeInput,
  initializeForm,
  doLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
