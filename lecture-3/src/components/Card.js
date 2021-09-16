import React, { useRef } from 'react';
import useLazyLoading from '../hooks/useLazyLoading';

function Card(props) {
  const targetRef = useRef(null);

  useLazyLoading(targetRef);

  return (
    <div className="text-center Card">
      <picture>
        {/* webp가 지원되는 브라우저라면 webp를 출력한다. */}
        <source data-srcset={props.webp} type="image/webp" />
        <img data-src={props.image} ref={targetRef} />
      </picture>
      <div className="p-5 text-xl font-semibold text-gray-700 md:text-lg lg:text-xl keep-all">
        {props.children}
      </div>
    </div>
  );
}

export default Card;
