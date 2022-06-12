import { Routes, Route } from 'react-router-dom';

import AdminHeader from '../components/AdminHeader';

import AdminLoggedInNotFound from './AdminLoggedInNotFound';

import AdminFooter from '../components/AdminFooter';

function AdminAfterLogin() {
  return (
    <>
      <AdminHeader />
      <div className='absolute inset-0 -z-10 bg-user4'></div>
      {/* <UserNavbar />
      <UserHeaderLoggedIn /> */}
      <div className='absolute inset-10 top-44 -z-10 bg-userWhite text-center justify-center items-center outline outline-1 outline-userBlack rounded-md shadow-xl capitalize'>
        <Routes>
          {/* <Route index element={<UserDashboard />} />
          <Route path='taska' element={<UserTaska />} />
          <Route path='sekolah' element={<UserSekolah />} />
          <Route path='/institusi' element={<UserInstitusi />} /> */}

          <Route path='*' element={<AdminLoggedInNotFound />} />
        </Routes>
      </div>
      <AdminFooter />
    </>
  );
}

export default AdminAfterLogin;
