import React, { useMemo } from 'react';
import styled from 'styled-components';

{
  /* <Feed>
<Feed.Header />
<Feed.Img />
<Feed.Nav />
<Feed.Comments />
<Feed.Input />
</Feed> */
}

const S = {};

S.Container = styled.div`
  width: 100%;
`;

S.Header = styled.div`
  width: 100%;
  & > button {
    width: 3rem;
  }
  & > p {
    font-size: 1.5rem;
  }
`;

S.Img = styled.img`
  width: 100%;
`;

export default function Feed({ children, ...props }) {
  return <S.Container {...props}>{children}</S.Container>;
}

Feed.Header = function FeedHeader({ children, ...props }) {
  return (
    <S.Header>
      <button>얼굴</button>
      <div>닉네임</div>
      <button>메뉴</button>
    </S.Header>
  );
};

Feed.Img = function FeedImg({ children, ...props }) {
  return <S.Img />;
};

Feed.Nav = function FeedNav({ children, ...props }) {
  return (
    <div>
      <button>하트</button>
    </div>
  );
};

Feed.HeartNum = function FeedHeartNum({ children, ...props }) {
  return <div>좋아요 0개</div>;
};

Feed.Comments = function FeedComments({ children, ...props }) {
  return <div></div>;
};

Feed.Input = function FeedInput({ children, ...props }) {
  return (
    <>
      <div>아이콘</div>
      <input placeholder="댓글달기" />
      <button>게시</button>
    </>
  );
};

// const S = {};
// S.Container = styled.div``;
