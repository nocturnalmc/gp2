import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

function AdminNavbar({
  setShowData,
  setShowFacility,
  setShowPegawai,
  setShowKlinik,
  setShowWelcome,
  setFacilityType,
  getFacilities,
  getOperators,
  daerah,
}) {
  const [showLinks, setShowLinks] = useState(false);
  const [thisIsClicked, setThisIsClicked] = useState('');

  const showWelcomeScreen = () => {
    setShowLinks(!showLinks);
    setShowWelcome(true);
    setShowData(false);
    setShowFacility(false);
    setShowPegawai(false);
    setShowKlinik(false);
  };

  const showKlinikNotFacil = () => {
    setShowKlinik(true);
    setShowFacility(false);
    setShowPegawai(false);
  };

  const showPegawaiOnly = () => {
    setShowPegawai(true);
    setShowKlinik(false);
    setShowFacility(false);
  };

  const showFacilNotKlinik = () => {
    setShowFacility(true);
    setShowKlinik(false);
    setShowPegawai(false);
  };

  const toggleData = () => {
    setShowLinks(!showLinks);
    setShowWelcome(false);
    setShowData(true);
  };

  const reset = () => {
    setShowLinks(!showLinks);
    setShowWelcome(false);
    setShowData(false);
    setShowFacility(false);
    setShowPegawai(false);
    setShowKlinik(false);
  };

  return (
    <>
      <nav
        className={`absolute w-60 h-screen bg-admin2 text-adminWhite text-center top-0 left-0 transition-all ${
          showLinks ? 'translate-x-0' : '-translate-x-60'
        }`}
      >
        <div className='h-40'></div>
        <div className='grid'>
          <button
            className='outline outline-admin3 outline-1 bg-admin2 rounded-md shadow-xl p-3 m-1 hover:bg-admin3 transition-all'
            onClick={() => {
              setThisIsClicked('');
              showWelcomeScreen();
            }}
          >
            PAPARAN UTAMA
          </button>
          <button
            className={
              thisIsClicked === 'klinik-pergigian'
                ? 'outline outline-admin3 outline-1 bg-admin3 rounded-md shadow-xl p-3 m-1 hover:bg-admin3 transition-all'
                : 'outline outline-admin3 outline-1 bg-admin2 rounded-md shadow-xl p-3 m-1 hover:bg-admin3 transition-all'
            }
            onClick={() => {
              reset();
              setThisIsClicked('klinik-pergigian');
              setFacilityType('klinik');
              showKlinikNotFacil();
              setTimeout(() => {
                getFacilities({
                  variables: {
                    jenisFasiliti: 'klinik',
                    daerah: daerah,
                  },
                });
                toggleData();
              }, 100);
            }}
          >
            KLINIK PERGIGIAN
          </button>
          <button
            className={
              thisIsClicked === 'pegawai-pergigian'
                ? 'outline outline-admin3 outline-1 bg-admin3 rounded-md shadow-xl p-3 m-1 hover:bg-admin3 transition-all'
                : 'outline outline-admin3 outline-1 bg-admin2 rounded-md shadow-xl p-3 m-1 hover:bg-admin3 transition-all'
            }
            onClick={() => {
              reset();
              setThisIsClicked('pegawai-pergigian');
              setFacilityType('pegawai');
              showPegawaiOnly();
              setTimeout(() => {
                getOperators({
                  variables: {
                    daerah: daerah,
                  },
                });
                toggleData();
              }, 100);
            }}
          >
            PEGAWAI PERGIGIAN
          </button>
          {/* <NavLink
            className={({ isActive }) =>
              isActive
                ? 'outline outline-admin3 outline-1 bg-admin3 rounded-md shadow-xl p-3 m-1 hover:bg-admin3 transition-all'
                : 'outline outline-admin3 outline-1 bg-admin2 rounded-md shadow-xl p-3 m-1 hover:bg-admin3 transition-all'
            }
            to='jp'
            onClick={() => {
              setShowLinks(!showLinks);
            }}
          >
            JURUTERAPI PERGIGIAN
          </NavLink> */}
          <button
            className={
              thisIsClicked === 'taska'
                ? 'outline outline-admin3 outline-1 bg-admin3 rounded-md shadow-xl p-3 m-1 hover:bg-admin3 transition-all'
                : 'outline outline-admin3 outline-1 bg-admin2 rounded-md shadow-xl p-3 m-1 hover:bg-admin3 transition-all'
            }
            onClick={() => {
              reset();
              setThisIsClicked('taska');
              setFacilityType('taska');
              showFacilNotKlinik();
              setTimeout(() => {
                getFacilities({
                  variables: {
                    jenisFasiliti: 'taska',
                    daerah: daerah,
                  },
                });
                toggleData();
              }, 100);
            }}
          >
            TASKA
          </button>
          <button
            className={
              thisIsClicked === 'tadika'
                ? 'outline outline-admin3 outline-1 bg-admin3 rounded-md shadow-xl p-3 m-1 hover:bg-admin3 transition-all'
                : 'outline outline-admin3 outline-1 bg-admin2 rounded-md shadow-xl p-3 m-1 hover:bg-admin3 transition-all'
            }
            onClick={() => {
              reset();
              setThisIsClicked('tadika');
              setFacilityType('tadika');
              showFacilNotKlinik();
              setTimeout(() => {
                getFacilities({
                  variables: {
                    jenisFasiliti: 'tadika',
                    daerah: daerah,
                  },
                });
                toggleData();
              }, 100);
            }}
          >
            TADIKA
          </button>
          <button
            className={
              thisIsClicked === 'sekolah-rendah'
                ? 'outline outline-admin3 outline-1 bg-admin3 rounded-md shadow-xl p-3 m-1 hover:bg-admin3 transition-all'
                : 'outline outline-admin3 outline-1 bg-admin2 rounded-md shadow-xl p-3 m-1 hover:bg-admin3 transition-all'
            }
            onClick={() => {
              reset();
              setThisIsClicked('sekolah-rendah');
              setFacilityType('sekolah-rendah');
              showFacilNotKlinik();
              setTimeout(() => {
                getFacilities({
                  variables: {
                    jenisFasiliti: 'sekolah-rendah',
                    daerah: daerah,
                  },
                });
                toggleData();
              }, 100);
            }}
          >
            SEKOLAH RENDAH
          </button>
          <button
            className={
              thisIsClicked === 'sekolah-menengah'
                ? 'outline outline-admin3 outline-1 bg-admin3 rounded-md shadow-xl p-3 m-1 hover:bg-admin3 transition-all'
                : 'outline outline-admin3 outline-1 bg-admin2 rounded-md shadow-xl p-3 m-1 hover:bg-admin3 transition-all'
            }
            onClick={() => {
              reset();
              setThisIsClicked('sekolah-menengah');
              setFacilityType('sekolah-menengah');
              showFacilNotKlinik();
              setTimeout(() => {
                getFacilities({
                  variables: {
                    jenisFasiliti: 'sekolah-menengah',
                    daerah: daerah,
                  },
                });
                toggleData();
              }, 100);
            }}
          >
            SEKOLAH MENENGAH
          </button>
          <button
            className={
              thisIsClicked === 'institusi'
                ? 'outline outline-admin3 outline-1 bg-admin3 rounded-md shadow-xl p-3 m-1 hover:bg-admin3 transition-all'
                : 'outline outline-admin3 outline-1 bg-admin2 rounded-md shadow-xl p-3 m-1 hover:bg-admin3 transition-all'
            }
            onClick={() => {
              reset();
              setThisIsClicked('institusi');
              setFacilityType('institusi');
              showFacilNotKlinik();
              setTimeout(() => {
                getFacilities({
                  variables: {
                    jenisFasiliti: 'institusi',
                    daerah: daerah,
                  },
                });
                toggleData();
              }, 100);
            }}
          >
            INSTITUSI
          </button>
          <button
            className={
              thisIsClicked === 'kp-bergerak'
                ? 'outline outline-admin3 outline-1 bg-admin3 rounded-md shadow-xl p-3 m-1 hover:bg-admin3 transition-all'
                : 'outline outline-admin3 outline-1 bg-admin2 rounded-md shadow-xl p-3 m-1 hover:bg-admin3 transition-all'
            }
            onClick={() => {
              reset();
              setThisIsClicked('kp-bergerak');
              setFacilityType('kp-bergerak');
              showFacilNotKlinik();
              setTimeout(() => {
                getFacilities({
                  variables: {
                    jenisFasiliti: 'kp-bergerak',
                    daerah: daerah,
                  },
                });
                toggleData();
              }, 100);
            }}
          >
            KP BERGERAK
          </button>
        </div>
      </nav>
      <div className='absolute w-60 top-0 left-0 flex text-center justify-center h-40'>
        <button
          className='text-2xl bg-adminWhite text-adminBlack mt-14 mb-14 px-3 rounded-md shadow-xl hover:rotate-90 transition-all'
          onClick={() => setShowLinks(!showLinks)}
        >
          <FaBars />
        </button>
      </div>
    </>
  );
}

export default AdminNavbar;
