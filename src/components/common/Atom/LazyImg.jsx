import React from 'react';
import { useLazyImageObserver } from '../../../hooks/useLazyImageObserver';

export default function LazyImg({ src, alt }) {
  const { imageSrc, imageRef } = useLazyImageObserver({ src });

  return <img ref={imageRef} src={imageSrc} alt={alt} />;
}
