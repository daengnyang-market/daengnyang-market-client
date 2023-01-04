import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const FilterMenu = ({ onBackgroundClick, onClickFilter, itemList }) => {
  const backgroundRef = useRef(null);

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

  const onClickBackgroundHandler = (e) => {
    if (e.target === backgroundRef.current) {
      onBackgroundClick(false);
    }
  };

  const onClickFilterHandler = (id) => {
    sessionStorage.setItem('hospital_filter', id);
    onClickFilter(id);
  };

  return (
    <>
      <section>
        <h2 className='sr-only'>메뉴</h2>

        <MenuWrapper ref={backgroundRef} onClick={onClickBackgroundHandler}>
          <MenuList>
            {itemList.map(({ id, title }) => (
              <MenuItem key={id}>
                <button type='button' onClick={() => onClickFilterHandler(id)}>
                  {title}
                </button>
              </MenuItem>
            ))}
          </MenuList>
        </MenuWrapper>
      </section>
    </>
  );
};

export default FilterMenu;

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

  ::before {
    content: '';
    display: block;
    width: 5rem;
    height: 0.4rem;
    margin: 0 auto 1.6rem auto;
    background-color: var(--border-color);
  }
`;

const MenuItem = styled.li`
  padding-left: 2.6rem;

  &:hover {
    color: var(--login-bg-color);
    transition: color 150ms;
  }

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
