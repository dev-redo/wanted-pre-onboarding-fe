import React from 'react';
import Header from './Header';
import Nav from '../Nav';

export default function GlobalHeaderLayout({ childeren, ...props }) {
  return (
    <>
      <Header>
        <Header.Img />
        <Header.Input />
        <Nav />
      </Header>
    </>
  );
}
