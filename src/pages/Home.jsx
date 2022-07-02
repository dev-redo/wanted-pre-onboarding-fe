import React from 'react';
import { Navigate } from 'react-router-dom';
import { getFeedData } from '../api/feed';
import { getAsyncValue } from '../util/getAsyncValue';
import { useUserState } from '../modules/context/auth/provider';
import GlobalLayout from '../layout/global';
import FeedLayout from '../components/common/Feed';

const suspendedFeedData = getAsyncValue(getFeedData());

export default function Home({ children, ...props }) {
  const { token } = useUserState();
  const feedData = suspendedFeedData.get().data;

  return (
    <>
      {!token && <Navigate to="/login" replace={true} />}
      <GlobalLayout>
        {feedData.map(feed => (
          <FeedLayout key={feed.id} feed={feed} />
        ))}
      </GlobalLayout>
    </>
  );
}
