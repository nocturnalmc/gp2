import { Routes, Route } from 'react-router-dom';

import UserHeader from '../components/UserHeader';
import UserNavbar from '../components/UserNavbar';
import UserHeaderLoggedIn from '../components/UserHeaderLoggedIn';

import UserDashboard from '../components/UserDashboard';

import UserUmum from '../components/UserUmum';
import UserFormUmumHeader from '../components/UserFormUmumHeader';

import UserSekolah from '../components/UserSekolah';
import UserFormSekolahPemeriksaan from '../components/UserFormSekolahPemeriksaan';
import UserFormSekolahRawatan from '../components/UserFormSekolahRawatan';
import UserFormSekolahKOTAK from '../components/UserFormSekolahKOTAK';
import UserFormSekolahHeader from '../components/UserFormSekolahHeader';

import UserGenerateIndividu from '../components/UserGenerateIndividu';
import UserGenerateKlinik from '../components/UserGenerateKlinik';

import UserStatusHarian from '../components/UserStatusHarian';

import UserLoggedInNotFound from './UserLoggedInNotFound';

import UserFooter from '../components/UserFooter';

import { useGlobalUserAppContext } from '../context/userAppContext';

function UserAfterLogin() {
  const { ToastContainer } = useGlobalUserAppContext();

  return (
    <>
      <ToastContainer />
      <UserHeader />
      <div className='absolute inset-0 -z-10 bg-user5'></div>
      <UserNavbar />
      <UserHeaderLoggedIn />
      <div className='absolute inset-10 top-[8rem] -z-10 bg-userWhite text-center justify-center items-center outline outline-1 outline-userBlack rounded-md shadow-xl capitalize'>
        <Routes>
          <Route index element={<UserDashboard />} />

          <Route path='umum' element={<UserUmum />} />
          <Route
            path='form-umum/:personUmumId'
            element={<UserFormUmumHeader />}
          />

          <Route path='sekolah' element={<UserSekolah />} />
          <Route
            path='sekolah/form-sekolah/pemeriksaan'
            element={<UserFormSekolahPemeriksaan />}
          />
          <Route
            path='sekolah/form-sekolah/rawatan'
            element={<UserFormSekolahRawatan />}
          />
          <Route
            path='sekolah/form-sekolah/kotak'
            element={<UserFormSekolahKOTAK />}
          />
          {/* <Route
            path='form-sekolah/:personSekolahId'
            element={<UserFormSekolahHeader />}
          /> */}

          <Route path='status-harian' element={<UserStatusHarian />} />
          <Route path='generate-individu' element={<UserGenerateIndividu />} />
          <Route path='generate-klinik' element={<UserGenerateKlinik />} />

          {/* <Route path='carian' element={<UserCarian />} /> */}

          <Route path='*' element={<UserLoggedInNotFound />} />
        </Routes>
      </div>
      <UserFooter />
    </>
  );
}

export default UserAfterLogin;
