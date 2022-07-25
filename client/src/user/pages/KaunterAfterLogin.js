import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

import KaunterHeader from '../components/KaunterHeader';
import KaunterNavbar from '../components/KaunterNavbar';
import KaunterHeaderLoggedIn from '../components/KaunterHeaderLoggedIn';
import KaunterLanding from '../components/KaunterLanding';
import Kaunter from '../components/Kaunter';
import KaunterFooter from '../components/KaunterFooter';

import { useState } from 'react';

import { useGlobalUserAppContext } from '../context/userAppContext';
import { useEffect } from 'react';

function KaunterAfterLogin() {
  const { ToastContainer, kaunterToken, navigate, catchAxiosErrorAndLogout } =
    useGlobalUserAppContext();

  const [createdByKp, setCreatedByKp] = useState('');
  const [createdByDaerah, setCreatedByDaerah] = useState('');
  const [createdByNegeri, setCreatedByNegeri] = useState('');

  useEffect(() => {
    const fetchIdentity = async () => {
      try {
        const { data } = await axios.get('/api/v1/identity', {
          headers: { Authorization: `Bearer ${kaunterToken}` },
        });
        setCreatedByKp(data.kp);
        setCreatedByDaerah(data.daerah);
        setCreatedByNegeri(data.negeri);
      } catch (error) {
        catchAxiosErrorAndLogout();
        navigate('/kaunter');
      }
    };
    fetchIdentity();
  }, []);

  const logout = () => {
    catchAxiosErrorAndLogout();
    navigate('/kaunter');
  };

  return (
    <>
      <ToastContainer />
      <KaunterHeader />
      <div className='absolute inset-0 -z-10 bg-kaunter3'></div>
      <KaunterNavbar />
      <KaunterHeaderLoggedIn namaKlinik={createdByKp} logout={logout} />
      <div className='absolute inset-10 top-[8rem] -z-10 bg-kaunterWhite text-center justify-center items-center outline outline-1 outline-kaunterBlack rounded-md shadow-xl capitalize'>
        <Routes>
          <Route index element={<KaunterLanding />} />
          <Route
            path='klinik'
            element={
              <Kaunter
                jenisFasiliti='klinik'
                createdByKp={createdByKp}
                createdByDaerah={createdByDaerah}
                setCreatedByNegeri={createdByNegeri}
              />
            }
          />
          <Route
            path='kkkd'
            element={
              <Kaunter
                jenisFasiliti='kkkd'
                createdByKp={createdByKp}
                createdByDaerah={createdByDaerah}
                setCreatedByNegeri={createdByNegeri}
              />
            }
          />
          <Route
            path='tastad'
            element={
              <Kaunter
                jenisFasiliti='tastad'
                createdByKp={createdByKp}
                createdByDaerah={createdByDaerah}
                setCreatedByNegeri={createdByNegeri}
              />
            }
          />
          <Route
            path='ipt'
            element={
              <Kaunter
                jenisFasiliti='ipt'
                createdByKp={createdByKp}
                createdByDaerah={createdByDaerah}
                setCreatedByNegeri={createdByNegeri}
              />
            }
          />
          <Route
            path='orang-asli'
            element={
              <Kaunter
                jenisFasiliti='orang-asli'
                createdByKp={createdByKp}
                createdByDaerah={createdByDaerah}
                setCreatedByNegeri={createdByNegeri}
              />
            }
          />
          <Route
            path='ppr'
            element={
              <Kaunter
                jenisFasiliti='ppr'
                createdByKp={createdByKp}
                createdByDaerah={createdByDaerah}
                setCreatedByNegeri={createdByNegeri}
              />
            }
          />
          <Route
            path='iwe'
            element={
              <Kaunter
                jenisFasiliti='iwe'
                createdByKp={createdByKp}
                createdByDaerah={createdByDaerah}
                setCreatedByNegeri={createdByNegeri}
              />
            }
          />
          <Route
            path='oku'
            element={
              <Kaunter
                jenisFasiliti='oku'
                createdByKp={createdByKp}
                createdByDaerah={createdByDaerah}
                setCreatedByNegeri={createdByNegeri}
              />
            }
          />
          <Route
            path='ngangkat'
            element={
              <Kaunter
                jenisFasiliti='ngangkat'
                createdByKp={createdByKp}
                createdByDaerah={createdByDaerah}
                setCreatedByNegeri={createdByNegeri}
              />
            }
          />
          <Route
            path='komlain'
            element={
              <Kaunter
                jenisFasiliti='komlain'
                createdByKp={createdByKp}
                createdByDaerah={createdByDaerah}
                setCreatedByNegeri={createdByNegeri}
              />
            }
          />
          <Route
            path='kelantan'
            element={
              <Kaunter
                jenisFasiliti='kelantan'
                createdByKp={createdByKp}
                createdByDaerah={createdByDaerah}
                setCreatedByNegeri={createdByNegeri}
              />
            }
          />
        </Routes>
      </div>
      <KaunterFooter />
    </>
  );
}

export default KaunterAfterLogin;
