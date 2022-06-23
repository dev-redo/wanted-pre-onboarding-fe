import React from 'react';
import { useUserState } from '../../modules/context/auth';
import Feed from './Feed';
import { calcurate } from '../../util/calcurate';

export default function FeedLayout({ feed }) {
  const uploadTime = calcurate.uploadFeedTime(feed.date);
  const { userId } = useUserState();

  return (
    <Feed>
      <Feed.Header />
      <Feed.Img />
      <Feed.Icons />
      <Feed.Content />
      <Feed.Comments />
      <Feed.Input />
    </Feed>
  );
}
