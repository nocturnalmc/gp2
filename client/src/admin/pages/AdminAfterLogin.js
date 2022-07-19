import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useLazyQuery } from '@apollo/client';
import { ToastContainer, toast } from 'react-toastify';

import { useGlobalAdminAppContext } from '../context/adminAppContext';

// -----------------------------------------------------------
import AdminLoginForm from './AdminLoginForm';

// logged in
import AdminHeaderLoggedIn from '../components/AdminHeaderLoggedIn';
import AdminNavbar from '../components/AdminNavbar';
// paparan utama
import AdminCenterStageLoggedIn from '../components/AdminCenterStageLoggedIn';
import Welcome from '../components/Welcome';
import Data from '../components/Data';
// logged in not found
import AdminLoggedInNotFound from './AdminLoggedInNotFound';

import AdminFooter from '../components/AdminFooter';
// -----------------------------------------------------------

function AdminAfterLogin() {
  const {
    token,
    navigate,
    getCurrentUser,
    catchAxiosErrorAndLogout,
    GET_FACILITIES,
    GET_ONE_FACILITY,
    GET_OPERATORS_BY_DAERAH,
  } = useGlobalAdminAppContext();

  const [showWelcome, setShowWelcome] = useState(true);
  const [showData, setShowData] = useState(false);
  const [showFacility, setShowFacility] = useState(false);
  const [showKlinik, setShowKlinik] = useState(false);
  const [showPegawai, setShowPegawai] = useState(false);
  const [facilityType, setFacilityType] = useState('');
  const [loginInfo, setLoginInfo] = useState({
    isLoggedIn: false,
    username: '',
    daerah: '',
    negeri: '',
  });

  const [
    getFacilities,
    {
      data: facilitiesData,
      loading: facilitiesLoading,
      error: facilitiesError,
      refetch: refetchFacilities,
    },
  ] = useLazyQuery(GET_FACILITIES);

  const [
    getOneFacility,
    { data: oneFacility, loading: loadingOneFacility, error: errorOneFacility },
  ] = useLazyQuery(GET_ONE_FACILITY);

  const [
    getOperators,
    {
      data: operators,
      loading: loadingOperators,
      error: errorOperators,
      refetch: refetchOperators,
    },
  ] = useLazyQuery(GET_OPERATORS_BY_DAERAH);

  useEffect(() => {
    getCurrentUser()
      .then((res) => {
        setLoginInfo({
          isLoggedIn: true,
          username: res.data.data.username,
          daerah: res.data.data.daerah,
          negeri: res.data.data.negeri,
        });
      })
      .catch((err) => {
        setLoginInfo({
          isLoggedIn: false,
        });
        catchAxiosErrorAndLogout();
        navigate('/admin');
      });
  }, []);

  if (!token) {
    return <AdminLoginForm />;
  }

  return (
    <>
      <AdminHeaderLoggedIn
        user={loginInfo.username}
        daerah={loginInfo.daerah}
      />
      <div className='absolute inset-0 -z-10 bg-admin5'></div>
      <AdminNavbar
        setShowData={setShowData}
        setShowFacility={setShowFacility}
        setShowPegawai={setShowPegawai}
        setShowKlinik={setShowKlinik}
        setShowWelcome={setShowWelcome}
        setFacilityType={setFacilityType}
        getFacilities={getFacilities}
        getOperators={getOperators}
        daerah={loginInfo.daerah}
      />
      <div className='absolute inset-10 top-44 -z-10 bg-adminWhite text-center justify-center items-center outline outline-1 outline-adminBlack rounded-md shadow-xl capitalize'>
        <Routes>
          <Route
            index
            element={
              <AdminCenterStageLoggedIn>
                {showWelcome && <Welcome />}
                <Data
                  showData={showData}
                  showFacility={showFacility}
                  showPegawai={showPegawai}
                  showKlinik={showKlinik}
                  user={loginInfo.username}
                  daerah={loginInfo.daerah}
                  negeri={loginInfo.negeri}
                  facilityType={facilityType}
                  data={facilitiesData}
                  loading={facilitiesLoading}
                  error={facilitiesError}
                  getOneFacility={getOneFacility}
                  oneFacility={oneFacility}
                  loadingOneFacility={loadingOneFacility}
                  errorOneFacility={errorOneFacility}
                  getOperators={getOperators}
                  operators={operators}
                  loadingOperators={loadingOperators}
                  errorOperators={errorOperators}
                  refetchFacilities={refetchFacilities}
                  refetchOperators={refetchOperators}
                  toast={toast}
                />
              </AdminCenterStageLoggedIn>
            }
          />
          <Route path='*' element={<AdminLoggedInNotFound />} />
        </Routes>
      </div>
      <ToastContainer />
      <AdminFooter />
    </>
  );
}

export default AdminAfterLogin;
