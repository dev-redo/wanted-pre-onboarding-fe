import { useState, useEffect } from 'react';

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
        { threshold: [0.25] },
      );

      observer.observe(imageRef.current);
    }

    return () => {
      observer && observer.disconnect(imageRef);
    };
  }, [imageRef, imageSrc, src]);

  return { imageSrc, imageRef };
}
