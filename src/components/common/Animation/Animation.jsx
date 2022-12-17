import { keyframes } from 'styled-components';

export const fadeIn = keyframes`
  from {
    opacity: 0
  }
  
  to {
    opacity: 1
  }
`;

export const fadeOut = keyframes`
  75% {
    opacity: 1
  }
  
  100% {
    opacity: 0
  }
`;
