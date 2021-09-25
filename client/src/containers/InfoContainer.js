import React, { useEffect } from 'react';
import Info from '../components/Info/Info';
import { connect } from 'react-redux';
import { getMyPosts } from '../modules/page';

const InfoContainer = ({ id, getMyPosts, myPosts }) => {
  useEffect(() => {
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

const mapDispatchToProps = { getMyPosts };

export default connect(mapStateToProps, mapDispatchToProps)(InfoContainer);
