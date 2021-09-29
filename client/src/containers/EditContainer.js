import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Edit from '../components/Edit/Edit';
import { changeInput } from '../modules/post';
import { initializePost, getContentforEdit } from '../modules/post';
import { doLogout, initializeForm, doEditPost } from '../modules/auth';

const EditContainer = ({
  loginSuccess,
  title,
  content,
  changeInput,
  initializeForm,
  history,
  res,
  doLogout,
  initializePost,
  match,
  getContentforEdit,
  doEditPost,
}) => {
  const { id } = match.params;
  useEffect(() => {
    initializePost('write');
    getContentforEdit(id);
  }, [initializePost, getContentforEdit, id]);

  useEffect(() => {
    if (!loginSuccess) {
      alert('로그인이 필요한 서비스입니다.');
      history.push('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const onCancel = () => {
    initializeForm('res');
    initializePost('write');
    history.goBack();
  };

  const onChangeInput = (e) => {
    changeInput({ form: 'write', data: e.target });
  };

  const onClick = () => {
    doEditPost({ id, title, content });
  };

  useEffect(() => {
    if (res === 'fail') {
      doLogout();
      alert('오류가 발생하였습니다.');
      initializeForm('res');
      initializePost('write');
    } else if (res === 'success') {
      alert('게시글 수정을 성공했습니다.');
      initializeForm('res');
      initializePost('write');
      history.push('/info');
    }
  }, [res, history, initializeForm, doLogout, initializePost]);

  return (
    <Edit
      title={title}
      content={content}
      onChangeInput={onChangeInput}
      onSubmit={onSubmit}
      onCancel={onCancel}
      onClick={onClick}
    />
  );
};

const mapStateToProps = ({ auth, post }) => ({
  loginSuccess: auth.loginSuccess,
  res: auth.res,
  title: post.write.title,
  content: post.write.content,
});

const mapDispatchToProps = {
  changeInput,
  initializeForm,
  doLogout,
  initializePost,
  getContentforEdit,
  doEditPost,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditContainer);
