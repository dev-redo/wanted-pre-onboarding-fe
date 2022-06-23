import React, { useState } from 'react';
import styled from 'styled-components';
import { Base } from '../../styles';
import Header from './view/Header';
import ContentLayout from './view/Content';
import LazyImg from '../common/LazyImg';
import Comments from './view/Comments';
import Like from './view/IconButton/LikeBtn';
import Send from './view/IconButton/SendBtn';
import BookMark from './view/IconButton/BookMarkBtn';
import CommentBtn from './view/IconButton/CommentBtn';
import EmoteBtn from './view/IconButton/EmoteBtn';

export default function Feed({ children, ...props }) {
  return <S.Container {...props}>{children}</S.Container>;
}

Feed.Header = function FeedHeader({ children, ...props }) {
  const userInfo = {
    name: '홍길동',
    avatarUrl:
      'https://yt3.ggpht.com/ytc/AKedOLTk3oOlcaYmGbmB0WrrSJzI_hX4RxCr8x5mpKHuXQ=s88-c-k-c0x00ffffff-no-rj-mo',
  };
  return <Header user={userInfo} />;
};

Feed.Img = function FeedImg({ children, ...props }) {
  return (
    <S.ImgWrapper>
      <LazyImg src={require('../../assets/image/Instargram-logo.png')} />
    </S.ImgWrapper>
  );
};

Feed.Icons = function FeedIcons({ children, ...props }) {
  return (
    <S.IconsWrapper>
      <section>
        <Like />
        <CommentBtn />
        <Send />
      </section>
      <BookMark />
    </S.IconsWrapper>
  );
};

Feed.Content = function FeedContent({ children, ...props }) {
  return <ContentLayout {...props} />;
};

Feed.Comments = function FeedComments({ children, ...props }) {
  const comment = {
    user: '홍길동',
    userComment: '으아아아',
  };

  return <Comments comment={comment} commentsCnt="5" />;
};

Feed.Input = function FeedInput({ children, ...props }) {
  const [value, setValue] = useState('');
  let isSubmit = value !== '';

  return (
    <S.Input>
      <EmoteBtn />
      <input
        name="comment"
        placeholder="댓글 달기"
        type="text"
        value={value}
        onChange={({ target: { value } }) => setValue(value)}
      />
      <button disabled={!isSubmit}>게시</button>
    </S.Input>
  );
};

const S = {};

S.Container = styled(Base)`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
`;

S.ImgWrapper = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  border: 1px solid #e4e4e4;
`;

S.IconsWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 1rem 1rem;
  row-gap: 1rem;
  section {
    display: flex;
    gap: 1rem;
  }
`;

S.Input = styled.section`
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

S.Button = styled.button`
  width: 100%;
  height: 2.5rem;
  margin-top: 1rem;
  font-size: 1.2rem;
  font-weight: bolder;
  color: white;
  background-color: #0195f7;
  &:disabled {
    cursor: default;
    background-color: #b2dffc;
  }
`;
