import React from 'react';
import styled from 'styled-components';
import Post from './../../../components/common/Post/Post';

const PopularPosts = () => {
  return (
    <section>
      <Header>
        <Title>실시간 인기글</Title>
      </Header>
      <PostWrapper>
        <Post userName='서귀포시 한라봉 타운' userId='@ hanlabong22' />
        <Post userName='서귀포시 한라봉 타운' userId='@ hanlabong22' />
        <Post userName='서귀포시 한라봉 타운' userId='@ hanlabong22' />
        <Post userName='서귀포시 한라봉 타운' userId='@ hanlabong22' />
        <Post userName='서귀포시 한라봉 타운' userId='@ hanlabong22' />
      </PostWrapper>
    </section>
  );
};

export default PopularPosts;

const Header = styled.header`
  border-bottom: 1px solid var(--border-color);
`;

const Title = styled.h2`
  padding: 1.6rem 0 1.6rem 1.6rem;
  font-size: var(--fs-lg);
`;

const PostWrapper = styled.div`
  margin-top: 20px;
`;
