import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ChatRoomPage from '../pages/ChatRoomPage/ChatRoomPage';
import CommunityMainPage from '../pages/communityPage/CommunityMainPage/CommunityMainPage';
import CommunityWeatherPage from '../pages/communityPage/CommunityWeatherPage/CommunityWeatherPage';
import EmailLoginPage from '../pages/EmailLoginPage/EmailLoginPage';
import FeedPage from '../pages/FeedPage/FeedPage';
import FollowListPage from '../pages/FollowListPage/FollowListPage';
import JoinMembershipPage from '../pages/JoinMembershipPage/JoinMembershipPage';
import PostDetailPage from '../pages/PostDetailPage/PostDetailPage';
import PostUploadPage from '../pages/PostUploadPage/PostUploadPage';
import ProductRegistrationPage from '../pages/ProductRegistrationPage/ProductRegistrationPage';
import ProductModificationPage from '../pages/ProductModificationPage/ProductModificationPage';
import ProfileModificationPage from '../pages/ProfileModificationPage/ProfileModificationPage';
import ProfilePage from '../pages/profilePage/ProfilePage';
import SearchPage from '../pages/SearchPage/SearchPage';
import SplashScreen from '../pages/SplashScreen/SplashScreen';
import ChatListPage from '../pages/chatListPage/ChatListPage';
import ProfileSettingsPage from '../pages/ProfileSettingsPage/ProfileSettingsPage';
import Error404Page from '../pages/Error404Page/Error404Page';
import CommunityHospitalPage from '../pages/communityPage/CommunityHospitalPage/CommunityHospitalPage';

const Router = () => {
  return (
    <Routes>
      {/* 비회원도 진입 페이지 */}
      <Route path='/' element={<SplashScreen />} />
      <Route path='/login' element={<EmailLoginPage />} />
      <Route path='/join' element={<JoinMembershipPage />} />
      <Route path='/join/setprofile' element={<ProfileSettingsPage />} />
      {/* 회원만 진입 가능 페이지 */}
      <Route path='/home' element={<FeedPage />} />
      <Route path='/search' element={<SearchPage />} />
      <Route path='/profile' element={<ProfilePage />} />
      <Route path='/profile/:accountname' element={<ProfilePage />} />
      <Route path='/profile/edit' element={<ProfileModificationPage />} />
      <Route path='/follow/:accountname/:type' element={<FollowListPage />} />
      <Route path='/post/:postid' element={<PostDetailPage />} />
      <Route path='/post/:postid/edit' element={<PostUploadPage />} />
      <Route path='/post/upload' element={<PostUploadPage />} />
      <Route path='/product' element={<ProductRegistrationPage />} />
      <Route path='/product/:productid/edit' element={<ProductModificationPage />} />
      <Route path='/community' element={<CommunityMainPage />} />
      <Route path='/community/weather' element={<CommunityWeatherPage />} />
      <Route path='/community/hospital' element={<CommunityHospitalPage />} />
      <Route path='/chat' element={<ChatListPage />} />
      <Route path='/chat/:accountname' element={<ChatRoomPage />} />
      <Route path='*' element={<Error404Page />} />
      <Route path='/notfound' element={<Error404Page />} />
    </Routes>
  );
};

export default Router;
