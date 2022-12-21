import React from 'react';
import ContentsLayout from '../../components/layout/ContentsLayout/ContentsLayout';
import PostUploadDetail from './PostUploadDetail';
const PostUploadPage = () => {
  return (
    <ContentsLayout isTabMenu={true} padding='0rem'>
      <PostUploadDetail />
    </ContentsLayout>
  );
};

export default PostUploadPage;
