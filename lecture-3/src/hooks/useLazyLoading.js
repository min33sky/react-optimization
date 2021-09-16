import { useEffect } from 'react';

/**
 * Image Lazy Loading Hook
 * @param {*} targetRef target
 */
export default function useLazyLoading(targetRef) {
  useEffect(() => {
    let options = {};

    let callback = (entries, observer) => {
      entries.forEach((entry) => {
        /**
         * ? Observer는 Target이 Viewport에 들어올때,
         * ? 나갈때 그리고 observer 객체를 생성할 때 callback 호출한다.
         */

        //* Target이 Viewport에 들어올 때만 호출한다.
        if (entry.isIntersecting) {
          //* jpg 이미지 소스
          targetRef.current.src = targetRef.current.dataset.src;
          //* webp 이미지 소스
          targetRef.current.previousSibling.srcset =
            targetRef.current.previousSibling.dataset.srcset;

          //* Target이 나갔다가 다시 들어올 때 호출되는 것을 방지
          observer.unobserve(targetRef.current);
        }
      });
    };
    let observer = new IntersectionObserver(callback, options);
    observer.observe(targetRef.current);
  }, [targetRef]);
}
