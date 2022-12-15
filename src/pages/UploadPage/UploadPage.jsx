import React from 'react';
import ContentsLayout from '../../components/layout/ContentsLayout/ContentsLayout';
import TopUploadNav from '../../components/common/TopNavBar/TopUploadNav';
import UploadPost from './UploadPost';
const UploadPage = () => {
  return (
    <ContentsLayout isTabMenu={true} padding='0rem'>
      <TopUploadNav children={'업로드'} disabled={true} />
      <UploadPost />
    </ContentsLayout>
  );
};

export default UploadPage;
