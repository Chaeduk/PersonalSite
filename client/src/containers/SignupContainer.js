import React, { useEffect } from 'react';
import Signup from '../components/Signup/Signup';
import { connect } from 'react-redux';
import { changeInput, initializeForm, doSignup } from '../modules/auth';

const SignupContainer = ({
  id,
  nickname,
  password,
  passwordConfirm,
  res,
  changeInput,
  initializeForm,
  doSignup,
  history,
  loading,
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
    alert('중복확인이 완료되었습니다');
  };

  useEffect(() => {
    initializeForm('register');
  }, [initializeForm]);

  useEffect(() => {
    if (loading) {
      if (res === 'hello') {
        history.push('/login');
      } else {
        alert('nono');
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
  loading: loading['auth/DO_SIGNUP'],
});

const mapDispatchToProps = {
  changeInput,
  initializeForm,
  doSignup,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer);
