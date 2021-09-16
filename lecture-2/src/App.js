import React, { lazy, Suspense, useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import InfoTable from './components/InfoTable';
import SurveyChart from './components/SurveyChart';
import Footer from './components/Footer';
// import ImageModal from './components/ImageModal'

function lazyWithPreload(importFunction) {
  const component = React.lazy(importFunction);
  component.preload = importFunction;
  return component;
}

const LazyImageModal = lazyWithPreload(() => import('./components/ImageModal'));

function App() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    //* 컴포넌트가 마운트 되고 preload하는 방법
    LazyImageModal.preload();
    //* 모달 첫 메인 이미지를 미리 preload한다. (썸네일은 용량이 작아서, 나머지 메인은 오히려 성능 약화라 할 필요가 없다.)
    const image = new Image();
    image.src =
      'https://stillmed.olympic.org/media/Photos/2016/08/20/part-1/20-08-2016-Football-Men-01.jpg?interpolation=lanczos-none&resize=*:800';
  }, []);

  const handleModalPrelead = () => {
    //* 마우스를 버튼에 올렸을 때 preload하는 방법
    //? 언제 클릭할 지 예상하기 힘든 단점이 있다.
    // console.log('modal preload');
    // const component = import('./components/ImageModal');
  };

  return (
    <div className="App">
      <Header />
      <InfoTable />
      <ButtonModal
        onClick={() => {
          setShowModal(true);
        }}
        onMouseEnter={handleModalPrelead}
      >
        올림픽 사진 보기
      </ButtonModal>
      <SurveyChart />
      <Footer />
      <Suspense fallback={null}>
        {showModal ? (
          <LazyImageModal
            closeModal={() => {
              setShowModal(false);
            }}
          />
        ) : null}
      </Suspense>
    </div>
  );
}

const ButtonModal = styled.button`
  border-radius: 30px;
  border: 1px solid #999;
  padding: 12px 30px;
  background: none;
  font-size: 1.1em;
  color: #555;
  outline: none;
  cursor: pointer;
`;

export default App;
