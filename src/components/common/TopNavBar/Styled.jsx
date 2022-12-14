import styled from 'styled-components';

export const TopNavBar = styled.header`
  max-width: 390px;
  position: fixed;
  width: 100%;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  padding: 0.8em 1.2em 0.8em 1.6em;
  z-index: 1;
  background-color: var(--main-bg-color);
  border-bottom: 1px solid var(--border-color);
`;

export const LeftArrow = styled.img`
  width: 22px;
  height: 22px;
  cursor: pointer;
`;

export const MoreBtn = styled.button`
  border: none;
  padding: 0;
  background-color: inherit;
  cursor: pointer;
  & img {
    width: 24px;
    height: 24px;
  }
`;

export const SearchBtn = styled.button`
  width: 24px;
  height: 24px;
  color: var(--sub-text-color);
`;
