import React, { useEffect } from 'react';
import Post from '../components/Post/Post';
import { connect } from 'react-redux';
import {
  convertPage,
  beforePaging,
  nextPaging,
  setPaging,
  getPosts,
  initalizePage,
} from '../modules/page';

const PostContainer = ({
  history,
  loginSuccess,
  currentPage,
  maxPagelength,
  currentPosts,
  convertPage,
  currentPaging,
  beforePaging,
  nextPaging,
  setPaging,
  getPosts,
  initalizePage,
}) => {
  const onClick = () => {
    if (loginSuccess) {
      history.push('/write');
    } else {
      alert('로그인이 필요한 서비스입니다!');
    }
  };

  useEffect(() => {
    initalizePage('posts');
    initalizePage('currentPage');
    initalizePage('currentPaging');
    initalizePage('maxPagelength');
    initalizePage('currentPosts');
    getPosts();
  }, [getPosts, initalizePage]);

  const n = [];
  for (let i = 1; i <= maxPagelength; i++) {
    n.push(i);
  }
  const pageNumbers = [];
  for (let i = 0; i < maxPagelength; i += 5) {
    pageNumbers.push(n.slice(i, i + 5));
  }
  const paginate = (n) => {
    convertPage(n);
  };

  const lastPaging = () => {
    convertPage(maxPagelength);
    setPaging(pageNumbers.length);
  };

  const firstPaging = () => {
    convertPage(1);
    setPaging(1);
  };

  return (
    <Post
      onClick={onClick}
      currentPosts={currentPosts}
      pageNumbers={pageNumbers}
      currentPage={currentPage}
      paginate={paginate}
      currentPaging={currentPaging}
      maxPagelength={maxPagelength}
      nextPaging={nextPaging}
      beforePaging={beforePaging}
      firstPaging={firstPaging}
      lastPaging={lastPaging}
    />
  );
};

const mapStateToProps = ({ auth, page }) => ({
  loginSuccess: auth.loginSuccess,
  currentPage: page.currentPage,
  maxPagelength: page.maxPagelength,
  currentPosts: page.currentPosts,
  currentPaging: page.currentPaging,
});

const mapDispatchToProps = {
  convertPage,
  beforePaging,
  nextPaging,
  setPaging,
  getPosts,
  initalizePage,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);
