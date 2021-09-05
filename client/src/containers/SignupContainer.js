import React, { useEffect } from 'react';
import Signup from '../components/Signup/Signup';
import { connect } from 'react-redux';
import { changeInput, initializeForm } from '../modules/auth';

const SignupContainer = ({
  id,
  nickname,
  password,
  passwordConfirm,
  changeInput,
  initializeForm,
}) => {
  const onChangeInput = (e) =>
    changeInput({ form: 'register', data: e.target });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(id, nickname, password, passwordConfirm);
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

const mapStateToProps = ({ auth }) => ({
  id: auth.register.id,
  nickname: auth.register.nickname,
  password: auth.register.password,
  passwordConfirm: auth.register.passwordConfirm,
});

const mapDispatchToProps = {
  changeInput,
  initializeForm,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer);
