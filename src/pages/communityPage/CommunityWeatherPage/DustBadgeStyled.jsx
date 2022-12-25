import styled, { css } from 'styled-components';

const DustBadge = ({ children, index }) => {
  return <DustBadgeStyle index={index}>{children}</DustBadgeStyle>;
};

const dustIndex = {
  good: {
    background: '#009EFF',
    color: 'var(--main-bg-color)',
  },
  notBad: {
    background: '#54B435',
    color: 'var(--main-bg-color)',
  },
  bad: {
    background: '#FF731D',
    color: 'var(--main-bg-color)',
  },
  veryBad: {
    background: '#D2001A',
    color: 'var(--main-bg-color)',
  },
};

const DustBadgeStyle = styled.dd`
  ${({ index }) => css`
    background: ${dustIndex[index].background};
    color: ${dustIndex[index].color};
    border-radius: 3px;
    padding: 0.5rem;
  `}
`;

export default DustBadge;
