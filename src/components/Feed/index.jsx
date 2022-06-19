import React from 'react';
import Feed from './Feed';

export default function FeedLayout() {
  return (
    <Feed>
      <Feed.Header />
      <Feed.Img />
      <Feed.Nav />
      <Feed.Comments />
      <Feed.Input />
    </Feed>
  );
}
