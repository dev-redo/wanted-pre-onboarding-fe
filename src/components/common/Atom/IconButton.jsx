import React from 'react';
import styled from 'styled-components';

function IconButton({ children, ...props }) {
  return <S.Button {...props}>{children}</S.Button>;
}

export default React.memo(IconButton);

const S = {};
S.Button = styled.button`
  background-color: transparent;
  svg {
    width: 2rem;
    height: 2rem;
  }
`;
