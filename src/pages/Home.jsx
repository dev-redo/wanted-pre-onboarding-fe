import React from 'react';
import { useRecoilValue } from 'recoil';
import { isAuthorized } from '../modules/atoms/auth';
import GlobalLayout from '../layout/global';
import { getAsyncValue } from '../lib/api/getAsyncValue';
import FeedLayout from '../components/Feed';
import { Navigate } from 'react-router-dom';
import useHttp from '../hooks/useHttp';

const suspendedFeedData = getAsyncValue(
  useHttp({
    url: './data/instargramFeedData.json',
  }),
);

export default function Home({ children, ...props }) {
  const auth = useRecoilValue(isAuthorized);
  const feedData = suspendedFeedData.get().data;

  return (
    <>
      {!auth && <Navigate to="/login" replace={true} />}
      <GlobalLayout>{JSON.stringify(feedData)}</GlobalLayout>
    </>
  );
}
