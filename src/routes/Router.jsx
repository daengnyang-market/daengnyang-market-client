import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CommunityHospitalDetailPage from '../pages/communityPage/communityHospitalPage/CommunityHospitalDetailPage/CommunityHospitalDetailPage';
import CommunityHospitaMainlPage from '../pages/communityPage/communityHospitalPage/CommunityHospitalMainPage/CommunityHospitaMainlPage';
import CommunityMainPage from '../pages/communityPage/CommunityMainPage/CommunityMainPage';
import CommunityWeatherPage from '../pages/communityPage/CommunityWeatherPage/CommunityWeatherPage';
import FeedPage from '../pages/FeedPage/FeedPage';
import FollowListPage from '../pages/FollowListPage/FollowListPage';
import JoinMembershipPage from '../pages/JoinMembershipPage/JoinMembershipPage';
import LoginMainPage from '../pages/LoginMainPage/LoginMainPage';
import PostDetailPage from '../pages/PostDetailPage/PostDetailPage';
import PostUploadPage from '../pages/PostUploadPage/PostUploadPage';
import ProductRegistrationPage from '../pages/ProductRegistrationPage/ProductRegistrationPage';
import ProfileModificationPage from '../pages/ProfileModificationPage/ProfileModificationPage';
import ProfilePage from '../pages/profilePage/ProfilePage';
import SearchPage from '../pages/SearchPage/SearchPage';
import SplashScreen from '../pages/SplashScreen/SplashScreen';

const Router = () => {
  return (
    <Routes>
      {/* 비회원도 진입 페이지 */}
      <Route path='/' element={<SplashScreen />} />
      <Route path='/login' element={<LoginMainPage />} />
      <Route path='/join' element={<JoinMembershipPage />} />
      {/* 회원만 진입 가능 페이지 */}
      <Route path='/home' element={<FeedPage />} />
      <Route path='/search' element={<SearchPage />} />
      <Route path='/profile/' element={<ProfilePage />} />
      <Route path='/profile/:accountname' element={<ProfilePage />} />
      <Route path='/profile/edit' element={<ProfileModificationPage />} />
      <Route path='/follow/:accountname/:type' element={<FollowListPage />} />
      <Route path='/post/:postid' element={<PostDetailPage />} />
      <Route path='/post/:postid/edit' element={<></>} />
      <Route path='/post/upload' element={<PostUploadPage />} />
      <Route path='/product' element={<ProductRegistrationPage />} />
      <Route path='/community' element={<CommunityMainPage />} />
      <Route path='/community/weather' element={<CommunityWeatherPage />} />
      <Route path='/community/hospital' element={<CommunityHospitaMainlPage />} />
      <Route path='/community/hospital/:hospitalid' element={<CommunityHospitalDetailPage />} />
    </Routes>
  );
};

export default Router;
