import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Comment from './Comment';

export default function Comments({ children, ...props }) {
  return (
    <S.Comments>
      <Link to="#">
        <span>댓글 {props.commentsCnt}개 모두 보기</span>
      </Link>
      <section>
        <Comment comment={props.comment} />
        <Comment comment={props.comment} />
      </section>
    </S.Comments>
  );
}

const S = {};
S.Comments = styled.section`
  padding: 0rem 1rem;
  a > span {
    color: #a1a1a1;
  }
  & > section {
    padding: 0.5rem 0;
  }
`;
