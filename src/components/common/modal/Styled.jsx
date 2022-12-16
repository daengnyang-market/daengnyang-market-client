import styled from 'styled-components';
import { fadeIn } from '../Animation/Animation';

export const MenuList = styled.ul`
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

export const MenuItem = styled.li`
  padding-left: 2.6rem;

  & > * {
    display: block;
    width: 100%;
    padding: 1.4rem 0;
    text-align: left;
    font-size: var(--fs-md);
  }
`;
