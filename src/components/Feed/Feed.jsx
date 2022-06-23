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

Feed.Content = function FeedContent({ children, ...props }) {
  return <S.Content {...props}>{children}</S.Content>;
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

Feed.HeartNum = function FeedHeartNum({ heartNum }) {
  return (
    <S.HeartNum>
      <span>좋아요 {heartNum}개</span>
    </S.HeartNum>
  );
};

Feed.Info = function FeedInfo({ name, info }) {
  return (
    <S.Info>
      <Link to="#">
        <span>{name}&nbsp;</span>
      </Link>
      <span>{info}</span>
    </S.Info>
  );
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

S.HeartNum = styled.section`
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
