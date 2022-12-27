import React from 'react';
import { useLocation } from 'react-router-dom';
import CommunityHospitalDetailPage from './CommunityHospitalDetailPage/CommunityHospitalDetailPage';
import CommunityHospitaMainPage from './CommunityHospitalMainPage/CommunityHospitaMainPage';

const CommunityHospitalPage = () => {
  const location = useLocation();

  return location.search ? <CommunityHospitalDetailPage /> : <CommunityHospitaMainPage />;
};

export default CommunityHospitalPage;
