import React from 'react';
import Gnb from './Gnb';
import Nav from '../Nav';

export default function GnbLayout({ childeren, ...props }) {
  return (
    <>
      <Gnb>
        <Gnb.Img />
        <Gnb.Input />
        <Nav />
      </Gnb>
    </>
  );
}
