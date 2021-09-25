import React, { useEffect } from 'react';
import Info from '../components/Info/Info';
import { connect } from 'react-redux';
import { getMyPosts, initalizePage } from '../modules/page';

const InfoContainer = ({
  id,
  loginSuccess,
  history,
  getMyPosts,
  myPosts,
  initalizePage,
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
  return <Info myPosts={myPosts} />;
};

const mapStateToProps = ({ auth, page }) => ({
  loginSuccess: auth.loginSuccess,
  id: auth.user.id,
  myPosts: page.myPosts,
});

const mapDispatchToProps = { getMyPosts, initalizePage };

export default connect(mapStateToProps, mapDispatchToProps)(InfoContainer);
