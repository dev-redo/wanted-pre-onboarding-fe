import React, { Suspense } from 'react';
import ErrorBoundary from './ErrorBoundary';

export default function AsyncBoundary({
  pendingFallback,
  rejectedFallback,
  children,
  ...errorBoundaryProps
}) {
  return (
    <ErrorBoundary
      renderFallback={rejectedFallback}
      {...errorBoundaryProps}
    >
      <Suspense fallback={pendingFallback}>{children}</Suspense>
    </ErrorBoundary>
  );
}
