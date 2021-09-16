import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Header(props) {
  const [isOpened, setIsOpened] = useState(false); //? 햄버거 버튼의 상태

  const toggleSidebar = () => {
    setIsOpened(!isOpened);
  };

  return (
    <>
      <section className="fixed inset-x-0 top-0 z-30 flex items-center h-16 bg-white border-b border-gray-200">
        <div className="relative w-full max-w-screen-xl px-6 mx-auto">
          <div className="flex items-center -mx-6">
            {/* 왼쪽 헤더 메뉴 */}
            <div className="pl-6 pr-6 lg:w-1/4 xl:w-1/5 lg:pr-8">
              <div className="flex items-center">
                <a href="/" className="flex-shrink-0 block lg:mr-4">
                  <img src={logo} className="w-10" alt="logo" />
                </a>
                <h2 className="ml-3 text-xl">Longboard</h2>
              </div>
            </div>

            {/* 오른쪽 헤더 메뉴 */}
            <div className="flex justify-end flex-grow lg:w-3/4 xl:w-4/5">
              {/* 햄버거 메뉴: lg breakpoint 부터 사라짐 */}
              <button
                onClick={toggleSidebar}
                className="flex items-center px-6 text-gray-500 lg:hidden focus:outline-none focus:text-gray-700"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>

              {/* 일반 메뉴: lg breakpoint부터 화면에 나타남 */}
              <div className="hidden px-6 lg:flex lg:items-center lg:justify-between">
                <div className="flex items-center justify-start text-gray-500">
                  <Link className="flex items-center block mr-5 hover:text-gray-700" to={'/'}>
                    Main
                  </Link>
                  <Link className="flex items-center block mr-5 hover:text-gray-700" to={'/items'}>
                    Items
                  </Link>
                  <Link className="flex items-center block mr-5 hover:text-gray-700" to={'/part'}>
                    Part of Board
                  </Link>
                  <Link
                    className="flex items-center block hover:text-gray-700"
                    to={'/riding-styles'}
                  >
                    Riding Styles
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*
       * 햄버거 버튼을 클릭횄을 때 나오는 메뉴
       * 가장 작은 화면에서는 가득차게 sm부터는 화면의 일부만 차지
       */}
      <div
        className={
          'fixed top-0 right-0 h-full w-full sm:w-64 bg-white text-center border-l z-40 sm:text-left ' +
          (isOpened ? '' : 'hidden')
        }
      >
        <div className="flex flex-col p-3 text-xl text-gray-700 lg:text-2xl">
          <div className="text-right">
            <button onClick={toggleSidebar}>
              <svg
                className="w-5 h-5 ml-auto text-gray-600 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
              </svg>
            </button>
          </div>
          <Link onClick={toggleSidebar} className="p-3 border-b" to={'/'}>
            Main
          </Link>
          <Link onClick={toggleSidebar} className="p-3 border-b" to={'/items'}>
            Items
          </Link>
          <Link onClick={toggleSidebar} className="p-3 border-b" to={'/part'}>
            Part of Board
          </Link>
          <Link onClick={toggleSidebar} className="p-3" to={'/riding-styles'}>
            Riding Styles
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
