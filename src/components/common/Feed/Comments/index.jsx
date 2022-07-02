import React from 'react';
import styled from 'styled-components';
import Comment from './Comment';

export default function Comments({
  comments,
  commentsCnt,
  ...props
}) {
  return (
    <S.Comments>
      <section>
        {comments.map((comment, idx) => (
          <Comment key={idx} comment={comment} {...props} />
        ))}
      </section>
    </S.Comments>
  );
}

const S = {};
S.Comments = styled.section`
  & > section {
    padding: 0.5rem 0;
  }
`;
