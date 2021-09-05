import React from 'react';
import Signup from '../components/Signup/Signup';
import { connect } from 'react-redux';
import { changeInput } from '../modules/auth';

const SignupContainer = ({
  id,
  nickname,
  password,
  passwordConfirm,
  changeInput,
}) => {
  const onChangeInput = (e) =>
    changeInput({ form: 'register', data: e.target });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(id, nickname, password, passwordConfirm);
  };
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
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer);
