import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Alert from '../Alert/Alert';
import { fadeIn } from '../Animation/Animation';

// * 주의 *
// 백그라운드 클릭 시 히든메뉴리스트를 닫기 위해서는 부모에게 onClickHandler 함수를 받아야 합니다.
// 부모로부터 받은 onClickHandler 함수가 없다면 39~41번째 줄에서 사용중인 함수가 없어 백그라운드 클릭시 'onClick is not a function' 에러가 발생합니다.
// 부모에 추가할 onClickHandler 함수 예시는 본 파일 최하단에 있습니다.
const HiddenMenu = ({ onClick }) => {
  const backgroundRef = useRef(null);
  const [isOpenAlert, setIsOpenAlert] = useState(false);

  useEffect(() => {
    const hasScroll = document.body.scrollHeight > document.body.offsetHeight;

    document.body.style.cssText = `
      position: fixed;
      top: -${window.scrollY}px;
      width: 100%;`;

    if (hasScroll) {
      document.body.style.cssText += 'overflow-y: scroll';
    }

    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  const onClickHiddenMenuHandler = (e) => {
    if (isOpenAlert) {
      return;
    }

    if (e.target === backgroundRef.current) {
      onClick(false);
    }
  };

  const onClickAlertButtonHandler = () => {
    setIsOpenAlert(!isOpenAlert);
  };

  return (
    <>
      <section>
        <h2 className='sr-only'>메뉴</h2>

        <MenuWrapper ref={backgroundRef} onClick={onClickHiddenMenuHandler}>
          <MenuList isOpenAlert={isOpenAlert}>
            <MenuItem>
              <button onClick={onClickAlertButtonHandler}>삭제</button>
            </MenuItem>
            <MenuItem>
              <button>수정</button>
            </MenuItem>
            <MenuItem>
              <Link to='#'>웹사이트에서 상품보기</Link>
            </MenuItem>
          </MenuList>
        </MenuWrapper>
      </section>

      {isOpenAlert ? <Alert onClick={onClickAlertButtonHandler} /> : <></>}
    </>
  );
};

export default HiddenMenu;

const MenuWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 100;
`;

const MenuList = styled.ul`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 39rem;
  padding: 1.6rem 0 1rem 0;
  border-radius: 10px 10px 0 0;
  background-color: var(--main-bg-color);
  animation: ${fadeIn} 0.3s linear;

  ::before {
    content: '';
    display: block;
    width: 5rem;
    height: 4px;
    margin: 0 auto 1.6rem auto;
    background-color: var(--border-color);
  }
`;

const MenuItem = styled.li`
  padding-left: 2.6rem;

  & > * {
    display: block;
    width: 100%;
    padding: 1.4rem 0;
    text-align: left;
    font-size: var(--fs-md);
    cursor: ${(props) => (props.isOpenAlert ? 'default' : 'pointer')};
    pointer-events: ${(props) => (props.isOpenAlert ? 'none' : 'auto')};
  }
`;

// 히든메뉴리스트를 닫기 위해 부모에 추가할 onClickHandler 함수 예시 시작 //
// const [isShowHiddenMenu, setIsShowHiddenMenu] = useState(false);
// const onClickHiddenMenuButtonHandler = () => {
//   setIsShowHiddenMenu(!isShowHiddenMenu);
// };
// return (
//   <>
//     <button onClick={onClickHiddenMenuButtonHandler}>히든메뉴 & alert 테스트 버튼</button>
//     {isShowHiddenMenu ? (
//       <>
//         <HiddenMenu onClick={onClickHiddenMenuButtonHandler} />
//       </>
//     ) : (
//       <></>
//     )}
//   </>
// );
// 히든메뉴리스트를 닫기 위해 부모에 추가할 onClickHandler 함수 예시 끝 //
