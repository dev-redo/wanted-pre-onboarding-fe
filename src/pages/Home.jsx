import React from 'react';
import { useRecoilValue } from 'recoil';
import { isAuthorized } from '../modules/atoms/auth';
import GlobalLayout from '../layout/global';
import Feed from '../components/Feed';
import { Navigate } from 'react-router-dom';

export default function Home({ children, ...props }) {
  const auth = useRecoilValue(isAuthorized);

  return (
    <>
      {!auth && <Navigate to="/login" replace={true} />}
      <GlobalLayout>
        <Feed />
        <Feed />
      </GlobalLayout>
    </>
  );
}
