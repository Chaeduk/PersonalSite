import React, { useEffect } from 'react';
import Signup from '../components/Signup/Signup';
import { connect } from 'react-redux';
import {
  changeInput,
  initializeForm,
  doSignup,
  doDoublecheck,
} from '../modules/auth';

const SignupContainer = ({
  id,
  nickname,
  password,
  passwordConfirm,
  res,
  changeInput,
  initializeForm,
  doSignup,
  doDoublecheck,
  history,
  loadingSignup,
  loadingDoublecheck,
}) => {
  const onChangeInput = (e) => {
    changeInput({ form: 'register', data: e.target });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    } else if (id === '' || nickname === '' || password === '') {
      alert('회원정보를 입력해주세요.');
      return;
    }
    doSignup({ id, nickname, password });
  };

  const onClick = () => {
    if (id === '') {
      alert('아이디를 입력해주세요.');
    } else {
      doDoublecheck(id);
    }
  };

  useEffect(() => {
    initializeForm('register');
  }, [initializeForm]);

  useEffect(() => {
    if (loadingSignup || loadingDoublecheck) {
      if (res === 'success') {
        alert('회원가입이 완료되었습니다!');
        history.push('/login');
        initializeForm('res');
        initializeForm('register');
      } else if (res !== '') {
        alert(res);
        initializeForm('res');
      }
    }
  });

  return (
    <Signup
      id={id}
      nickname={nickname}
      password={password}
      passwordConfirm={passwordConfirm}
      onChangeInput={onChangeInput}
      onSubmit={onSubmit}
      onClick={onClick}
    />
  );
};

const mapStateToProps = ({ auth, loading }) => ({
  id: auth.register.id,
  nickname: auth.register.nickname,
  password: auth.register.password,
  passwordConfirm: auth.register.passwordConfirm,
  res: auth.res,
  loadingSignup: loading['auth/DO_SIGNUP'],
  loadingDoublecheck: loading['auth/DO_DOUBLECHECK'],
});

const mapDispatchToProps = {
  changeInput,
  initializeForm,
  doSignup,
  doDoublecheck,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer);
