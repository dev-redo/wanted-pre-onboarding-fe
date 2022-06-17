import React from 'react';
import GlobalHeader from './Header';
import { Base, BackGround } from '../../styles';

function GlobalLayout({ children, ...props }) {
  return (
    <>
      <BackGround>
        <GlobalHeader />
        <Base {...props}>{children}</Base>
      </BackGround>
    </>
  );
}

export default React.memo(GlobalLayout);
