import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Base } from '../../styles';
import LazyImg from '../common/LazyImg';
import Header from './view/Header';
import Comments from './view/Comments';
import Like from './view/IconButton/LikeBtn';
import Send from './view/IconButton/SendBtn';
import BookMark from './view/IconButton/BookMarkBtn';
import CommentBtn from './view/IconButton/CommentBtn';
import EmoteBtn from './view/IconButton/EmoteBtn';

export default function Feed({ children, ...props }) {
  return <S.Container {...props}>{children}</S.Container>;
}

Feed.Header = function FeedHeader({ name, avatar, ...props }) {
  const userInfo = {
    name,
    avatar,
  };
  return <Header user={userInfo} />;
};

Feed.Img = function FeedImg({ src, ...props }) {
  return (
    <S.ImgWrapper {...props}>
      <LazyImg src={src} alt="피드 이미지" />
    </S.ImgWrapper>
  );
};

Feed.Content = function FeedContent({ children, ...props }) {
  return <S.Content {...props}>{children}</S.Content>;
};

Feed.Icons = function FeedIcons({ children, ...props }) {
  return (
    <S.IconsWrapper {...props}>
      <section>
        <Like />
        <CommentBtn />
        <Send />
      </section>
      <BookMark />
    </S.IconsWrapper>
  );
};

Feed.LikeCnt = function FeedHeartNum({ likeCnt, ...props }) {
  return (
    <S.LikeCnt>
      <span>좋아요 {likeCnt}개</span>
    </S.LikeCnt>
  );
};

Feed.Info = function FeedInfo({ name, description, ...props }) {
  return (
    <S.Info>
      <Link to="#">
        <span>{name}&nbsp;</span>
      </Link>
      <span>{description}</span>
    </S.Info>
  );
};

Feed.Comments = function FeedComments({ comments, ...props }) {
  return <Comments comments={comments} />;
};

Feed.Input = function FeedInput({
  user,
  comments,
  submitCallback,
  ...props
}) {
  const [userComment, setUserComment] = useState('');
  let isSubmit = userComment !== '';

  const submitHandler = e => {
    e.preventDefault();
    submitCallback({ user, userComment });
    setUserComment('');
  };

  return (
    <S.Input {...props} onSubmit={submitHandler}>
      <EmoteBtn />
      <input
        name="comment"
        placeholder="댓글 달기"
        type="text"
        value={userComment}
        onChange={({ target: { value } }) => setUserComment(value)}
      />
      <button disabled={!isSubmit}>게시</button>
    </S.Input>
  );
};

const S = {};

S.Container = styled(Base)`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
`;

S.ImgWrapper = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  border: 1px solid #e4e4e4;
`;

S.Content = styled.section`
  display: grid;
  row-gap: 1rem;
  padding: 1rem 1rem;
`;

S.IconsWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  row-gap: 1rem;
  section {
    display: flex;
    gap: 1rem;
  }
`;

S.LikeCnt = styled.section`
  span {
    font-size: 1rem;
  }
`;

S.Info = styled.section`
  font-size: 1rem;
  a > span {
    font-weight: bold;
  }
`;

S.Input = styled.form`
  display: flex;
  width: 100%;
  height: 4rem;
  padding: 1rem 1rem;
  input {
    width: 100%;
    margin-left: 1rem;
    font-size: 1rem;
  }
  button:last-child {
    width: 4rem;
    background-color: transparent;
    color: #1390e1;
    font-size: 1rem;
    font-weight: bold;
    &:disabled {
      cursor: default;
      color: #b2dffc;
    }
  }
`;
