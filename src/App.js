import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Login = lazy(() => import('./pages/Login'));
const Home = lazy(() => import('./pages/Home'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Suspense>
  );
}

export default App;
