import React, { useEffect } from 'react';
import Info from '../components/Info/Info';
import { connect } from 'react-redux';
import { doDeletePost, initializeForm, doLogout } from '../modules/auth';
import { getMyPosts, initalizePage } from '../modules/page';

const InfoContainer = ({
  id,
  loginSuccess,
  history,
  getMyPosts,
  myPosts,
  initalizePage,
  initializeForm,
  doDeletePost,
  res,
  doLogout,
}) => {
  useEffect(() => {
    if (!loginSuccess) {
      alert('로그인이 필요한 서비스입니다.');
      history.push('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    initalizePage('myPosts');
    getMyPosts(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getMyPosts]);

  useEffect(() => {
    if (res === 'fail') {
      doLogout();
      alert('오류가 발생하였습니다.');
      initializeForm('res');
      initalizePage('myPosts');
    } else if (res === 'success') {
      alert('성공적으로 삭제하였습니다.');
      initializeForm('res');
      getMyPosts(id);
    }
  }, [res, history, doLogout, initalizePage, initializeForm, getMyPosts, id]);

  const doEditPost = (id) => {
    history.push(`/edit/${id}`);
  };

  return (
    <Info
      myPosts={myPosts}
      doDeletePost={doDeletePost}
      doEditPost={doEditPost}
    />
  );
};

const mapStateToProps = ({ auth, page }) => ({
  loginSuccess: auth.loginSuccess,
  id: auth.user.id,
  myPosts: page.myPosts,
  res: auth.res,
});

const mapDispatchToProps = {
  getMyPosts,
  initalizePage,
  doDeletePost,
  initializeForm,
  doLogout,
};

export default connect(mapStateToProps, mapDispatchToProps)(InfoContainer);
