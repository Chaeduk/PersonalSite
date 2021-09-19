import React from 'react';
import { connect } from 'react-redux';
import Post from '../components/Post/Post';

const PostContainer = ({ history, loginSuccess }) => {
  const onClick = () => {
    if (loginSuccess) {
      history.push('/write');
    } else {
      alert('로그인이 필요한 서비스입니다!');
    }
  };
  return <Post onClick={onClick} />;
};

const mapStateToProps = ({ auth }) => ({
  loginSuccess: auth.loginSuccess,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);
