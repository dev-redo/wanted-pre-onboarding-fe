import React from 'react';
import { useUserState } from '../../modules/context/auth';
import Feed from './Feed';

export default function FeedLayout({ feed }) {
  const { userId } = useUserState();

  return (
    <Feed>
      <Feed.Header />
      <Feed.Img />
      <Feed.Content>
        <Feed.Icons />
        <Feed.HeartNum heartNum="1" />
        <Feed.Info
          name="홍길동"
          info="너 밖에 없어서 널 사랑한게 아니라 널 사랑하다보니 너밖에 없더라 귀여니 - 늑대의 유혹"
        />
        <Feed.Comments />
      </Feed.Content>
      <Feed.Input />
    </Feed>
  );
}
