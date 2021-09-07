import React, { useEffect } from 'react';
import Signup from '../components/Signup/Signup';
import { connect } from 'react-redux';
import { changeInput, initializeForm, doSignup } from '../modules/auth';

const SignupContainer = ({
  id,
  nickname,
  password,
  passwordConfirm,
  changeInput,
  initializeForm,
  doSignup,
  history,
}) => {
  const onChangeInput = (e) =>
    changeInput({ form: 'register', data: e.target });

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(id, nickname, password, passwordConfirm);
    // doSignup({ id, nickname, password });
    // history.push('/');
  };

  useEffect(() => {
    initializeForm('register');
  }, [initializeForm]);

  return (
    <Signup
      id={id}
      nickname={nickname}
      password={password}
      passwordConfirm={passwordConfirm}
      onChangeInput={onChangeInput}
      onSubmit={onSubmit}
    />
  );
};

const mapStateToProps = ({ auth, loading }) => ({
  id: auth.register.id,
  nickname: auth.register.nickname,
  password: auth.register.password,
  passwordConfirm: auth.register.passwordConfirm,
});

const mapDispatchToProps = {
  changeInput,
  initializeForm,
  doSignup,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer);
