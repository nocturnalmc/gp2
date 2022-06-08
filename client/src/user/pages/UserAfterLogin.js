import { Routes, Route } from 'react-router-dom';

import UserHeader from '../components/UserHeader';

import UserNavbar from '../components/UserNavbar';
import UserHeaderLoggedIn from '../components/UserHeaderLoggedIn';

import UserDashboard from '../components/UserDashboard';
import UserTaska from '../components/UserTaska';
import UserSekolah from '../components/UserSekolah';
import UserFormSekolah from '../components/UserFormSekolah';

import UserLoggedInNotFound from './UserLoggedInNotFound';

import UserFooter from '../components/UserFooter';

function UserAfterLogin() {
  return (
    <>
      <UserHeader />
      <div className='absolute inset-0 -z-10 bg-user4'></div>
      <UserNavbar />
      <UserHeaderLoggedIn />
      <div className='absolute inset-10 top-44 -z-10 bg-userWhite text-center justify-center items-center outline outline-1 outline-userBlack rounded-md shadow-xl capitalize'>
        <Routes>
          <Route index element={<UserDashboard />} />
          <Route path='taska' element={<UserTaska />} />
          <Route path='sekolah' element={<UserSekolah />} />
          <Route path='form-sekolah' element={<UserFormSekolah />} />
          {/* <Route path='/institusi' element={<UserInstitusi />} /> */}

          <Route path='*' element={<UserLoggedInNotFound />} />
        </Routes>
      </div>
      <UserFooter />
    </>
  );
}

export default UserAfterLogin;
