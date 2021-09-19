import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Write from '../components/Write/Write';
import { changeInput, initializeForm } from '../modules/post';

const WriteContainer = ({
  loginSuccess,
  title,
  content,
  changeInput,
  initializeForm,
  history,
}) => {
  useEffect(() => {
    initializeForm('write');
  }, [initializeForm]);

  useEffect(() => {
    if (!loginSuccess) {
      alert('로그인이 필요한 서비스입니다.');
      history.push('/');
    }
  });

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const onChangeInput = (e) => {
    changeInput({ form: 'write', data: e.target });
  };
  return (
    <Write
      title={title}
      content={content}
      onChangeInput={onChangeInput}
      onSubmit={onSubmit}
    />
  );
};

const mapStateToProps = ({ auth, post }) => ({
  loginSuccess: auth.loginSuccess,
  title: post.write.title,
  content: post.write.content,
});

const mapDispatchToProps = {
  changeInput,
  initializeForm,
};

export default connect(mapStateToProps, mapDispatchToProps)(WriteContainer);
