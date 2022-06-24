import { useState, useRef, useEffect } from 'react';

/**
 * useLazyImageObserver
 * @typedef { function }
 * @function Intersection Observer를 이용해 레이지 로딩을 구현하는 훅
 * @return { src, ref } 인자로 전달받은 src로 업데이트 된 상태, 구독하는 타겟 엘레먼트
 */
export function useLazyImageObserver({ src }) {
  const [imageSrc, setImageSrc] = useState(null);
  const imageRef = useRef(null);

  useEffect(() => {
    let observer;

    if (imageRef && !imageSrc) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
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

  return { imageSrc, imageRef };
}
