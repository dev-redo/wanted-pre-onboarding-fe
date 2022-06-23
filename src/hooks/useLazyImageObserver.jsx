import { useState, useRef, useEffect } from 'react';

/**
 * useLazyImageObserver
 * @typedef { function }
 * @function Intersection Observer를 이용해 레이지 로딩을 구현하는 훅
 * @return {boolean, src, ref}
 */
export function useLazyImageObserver({ src }) {
  const [isLoad, setIsLoad] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);
  const imageRef = useRef(null);

  useEffect(() => {
    let observer;

    if (imageRef && !imageSrc) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsLoad(true);
            setImageSrc(src);
            observer.unobserve(imageRef.current);
          }
        },
        {
          rootMargin: '10%',
          threshold: [0.25],
        },
      );

      observer.observe(imageRef.current);
    }

    return () => {
      observer && observer.disconnect(imageRef);
    };
  }, [imageRef, imageSrc, src]);

  return { isLoad, imageSrc, imageRef };
}
