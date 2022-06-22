import React, { Suspense, lazy } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Route, Routes } from 'react-router-dom';
import Loader from './components/common/Loader';
import Error from './components/common/Error';

const Login = lazy(() => import('./pages/Login'));
const Home = lazy(() => import('./pages/Home'));

function App() {
  return (
    <ErrorBoundary
      fallback={<Error>페이지 로드 중 문제가 발생했습니다!</Error>}
    >
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
