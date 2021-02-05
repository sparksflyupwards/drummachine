import React, { lazy, Suspense } from 'react';

const LazyDrumPad = lazy(() => import('./DrumPad'));

const DrumPad = props => (
  <Suspense fallback={null}>
    <LazyDrumPad {...props} />
  </Suspense>
);

export default DrumPad;
