import React, { useMemo } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Content({ children, ...props }) {
  return <S.Container {...props}>{children}</S.Container>;
}

Content.HeartNum = function ContentIcons({ heartNum }) {
  return (
    <S.HeartNum>
      <span>좋아요 {heartNum}개</span>
    </S.HeartNum>
  );
};

Content.FeedInfo = function ContentFeedInfo({ name, info }) {
  return (
    <S.Info>
      <Link to="#">
        <span>{name}&nbsp;</span>
      </Link>
      <span>{info}</span>
    </S.Info>
  );
};

Content.UploadTime = function ContentUploadTime() {};

const S = {};

S.Container = styled.section`
  display: grid;
  padding: 0rem 1rem;
  row-gap: 1rem;
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
