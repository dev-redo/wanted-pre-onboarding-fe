import React, { Suspense, lazy } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Route, Routes } from 'react-router-dom';
import Loader from './components/common/Loader';
import Error from './components/common/Error';
import AsyncBoundary from './components/common/Error/AsyncBoundary';

const Login = lazy(() => import('./pages/Login'));
const Home = lazy(() => import('./pages/Home'));

function App() {
  return (
    // <ErrorBoundary FallbackComponent={Error}>
    //   <Suspense fallback={<Loader />}>
    <AsyncBoundary
      pendingFallback={<Loader />}
      rejectedFallback={<div>에러!~</div>}
    >
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AsyncBoundary>
    //   </Suspense>
    // </ErrorBoundary>
  );
}

export default App;
