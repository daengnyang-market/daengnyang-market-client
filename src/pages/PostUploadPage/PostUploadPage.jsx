import React from 'react';
import ContentsLayout from '../../components/layout/ContentsLayout/ContentsLayout';
import TopUploadNav from '../../components/common/TopNavBar/TopUploadNav';
import PostUploadDetail from './PostUploadDetail';
const PostUploadPage = () => {
  return (
    <ContentsLayout isTabMenu={true} padding='0rem'>
      <TopUploadNav children={'업로드'} disabled={true} />
      <PostUploadDetail />
    </ContentsLayout>
  );
};

export default PostUploadPage;
