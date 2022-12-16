import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const ModalLayout = ({ children, closeModal, isOpenAlert }) => {
  const backgroundRef = useRef(null);

  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      width: 100%;`;

    if (document.body.scrollHeight > window.innerHeight) {
      document.body.style.cssText += 'overflow-y: scroll;';
    }

    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  const onCloseModalHandler = (e) => {
    if (isOpenAlert) {
      return;
    }

    if (e.target === backgroundRef.current) {
      closeModal(false);
    }
  };

  return (
    <section>
      <h2 className='sr-only'>메뉴</h2>
      <MenuWrapper ref={backgroundRef} onClick={onCloseModalHandler}>
        {children}
      </MenuWrapper>
    </section>
  );
};

export default ModalLayout;

const MenuWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 9800;
`;
