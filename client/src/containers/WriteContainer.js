import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Write from '../components/Write/Write';
import { changeInput } from '../modules/post';
import { initializePost } from '../modules/post';
import { doLogout, doWrite, initializeForm } from '../modules/auth';

const WriteContainer = ({
  loginSuccess,
  title,
  content,
  changeInput,
  initializeForm,
  history,
  res,
  doLogout,
  doWrite,
  initializePost,
}) => {
  useEffect(() => {
    initializePost('write');
  }, [initializePost]);

  useEffect(() => {
    if (!loginSuccess) {
      alert('로그인이 필요한 서비스입니다.');
      history.push('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (res === 'fail') {
      doLogout();
      alert('오류가 발생하였습니다.');
      initializeForm('res');
      initializePost('write');
    } else if (res === 'success') {
      alert('게시글 등록을 성공했습니다.');
      initializeForm('res');
      initializePost('write');
      history.push('/post');
    }
  }, [res, history, initializeForm, doLogout, initializePost]);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const onClick = () => {
    doWrite({ title, content });
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
      onClick={onClick}
    />
  );
};

const mapStateToProps = ({ auth, post }) => ({
  loginSuccess: auth.loginSuccess,
  title: post.write.title,
  content: post.write.content,
  res: auth.res,
});

const mapDispatchToProps = {
  changeInput,
  initializeForm,
  doLogout,
  doWrite,
  initializePost,
};

export default connect(mapStateToProps, mapDispatchToProps)(WriteContainer);
