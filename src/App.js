import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from './components/common/Loader';
import AsyncBoundary from './components/common/Error/AsyncBoundary';
import ErrorFallback from './components/common/Error/ErrorFallback';

const Login = lazy(() => import('./pages/Login'));
const Home = lazy(() => import('./pages/Home'));

function App() {
  return (
    <AsyncBoundary
      pendingFallback={<Loader />}
      rejectedFallback={({ error, reset }) => (
        <ErrorFallback error={error} reset={reset} />
      )}
    >
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AsyncBoundary>
  );
}

export default App;
