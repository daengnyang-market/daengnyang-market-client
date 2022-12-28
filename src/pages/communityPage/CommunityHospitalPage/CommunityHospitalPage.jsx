import React from 'react';
import { useLocation } from 'react-router-dom';
import CommunityHospitalDetailPage from './CommunityHospitalDetailPage/CommunityHospitalDetailPage';
import CommunityHospitalMainPage from './CommunityHospitalMainPage/CommunityHospitalMainPage';

const CommunityHospitalPage = () => {
  const location = useLocation();

  return location.search ? <CommunityHospitalDetailPage /> : <CommunityHospitalMainPage />;
};

export default CommunityHospitalPage;
