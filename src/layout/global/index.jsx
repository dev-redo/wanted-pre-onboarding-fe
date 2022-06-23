import React from 'react';
import Gnb from './view/Gnb';
import { BackGround } from '../../styles';

function GlobalLayout({ children, ...props }) {
  return (
    <BackGround>
      <Gnb />
      {children}
    </BackGround>
  );
}

export default React.memo(GlobalLayout);
