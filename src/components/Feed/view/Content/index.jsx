import React from 'react';
import styled from 'styled-components';
import Content from './Content';

export default function ContentLayout({ children, ...props }) {
  return (
    <Content>
      <Content.HeartNum heartNum="1" />
      <Content.FeedInfo
        name="홍길동"
        info="너 밖에 없어서 널 사랑한게 아니라 널 사랑하다보니 너밖에 없더라 귀여니 - 늑대의 유혹"
      />
      <Content.UploadTime />
    </Content>
  );
}
