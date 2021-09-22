import React, { useEffect } from 'react';
import Content from '../components/Content/Content';
import { connect } from 'react-redux';
import { getContent, initializePost } from '../modules/post';

const ContentContainer = ({
  title,
  content,
  nickname,
  getContent,
  match,
  history,
  initializePost,
}) => {
  const { id } = match.params;
  useEffect(() => {
    getContent(id);
  }, [getContent, id]);
  const onClick = () => {
    initializePost('content');
    history.goBack();
  };
  return (
    <Content
      title={title}
      content={content}
      nickname={nickname}
      onClick={onClick}
    />
  );
};

const mapStateToProps = ({ post }) => ({
  title: post.content.title,
  content: post.content.content,
  nickname: post.content.nickname,
});

const mapDispatchToProps = {
  getContent,
  initializePost,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentContainer);
