import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { FaBars, FaArrowAltCircleUp } from 'react-icons/fa';

function UserNavbar() {
  const [showLinks, setShowLinks] = useState(false);
  const [showRetenSubMenu, setShowRetenSubMenu] = useState(false);
  const [showGenerateSubMenu, setShowGenerateSubMenu] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const toggleRetenSubMenu = () => {
    setShowRetenSubMenu(!showRetenSubMenu);
  };

  const toggleGenerateSubMenu = () => {
    setShowGenerateSubMenu(!showGenerateSubMenu);
  };

  return (
    <>
      <nav
        className={`absolute w-60 h-screen bg-user2 text-userWhite text-center top-0 left-0 transition-all ${
          showLinks ? 'translate-x-0' : '-translate-x-60'
        }`}
      >
        <div className='h-28'></div>
        <div className='grid'>
          <NavLink
            to='/user'
            onClick={() => {
              setShowLinks(!showLinks);
              setShowRetenSubMenu(false);
              setShowGenerateSubMenu(false);
            }}
            className='bg-user4 rounded-md shadow-xl p-3 m-1 hover:bg-user3 transition-all'
          >
            DASHBOARD
          </NavLink>
          <NavLink
            to='status-harian'
            onClick={() => {
              setShowLinks(!showLinks);
              setShowRetenSubMenu(false);
              setShowGenerateSubMenu(false);
            }}
            className={({ isActive }) =>
              isActive
                ? 'bg-user3 rounded-md shadow-xl p-3 m-1 hover:bg-user3 transition-all'
                : 'bg-user4 rounded-md shadow-xl p-3 m-1 hover:bg-user3 transition-all'
            }
          >
            STATUS HARIAN
          </NavLink>
          <div>
            <div
              className={`${
                showRetenSubMenu ? 'bg-user3' : 'bg-user4'
              } flex items-center justify-center rounded-md shadow-xl p-3 m-1 hover:bg-user3 transition-all hover:cursor-pointer`}
              onClick={toggleRetenSubMenu}
            >
              <span>RETEN</span>
              <span className='ml-10'>
                <FaArrowAltCircleUp
                  className={`transition-all ${
                    showRetenSubMenu && 'rotate-180'
                  }`}
                />
              </span>
            </div>
            <div
              className={`grid transition-all ${
                showRetenSubMenu ? 'max-h-96' : 'max-h-0 overflow-hidden'
              }`}
            >
              <NavLink
                to='umum'
                onClick={() => {
                  setShowLinks(!showLinks);
                  setShowGenerateSubMenu(false);
                }}
                className={({ isActive }) =>
                  isActive
                    ? 'bg-user8 rounded-md shadow-xl p-3 my-0.5 mx-1 hover:bg-user8 transition-all'
                    : 'bg-user1 rounded-md shadow-xl p-3 my-0.5 mx-1 hover:bg-user8 transition-all'
                }
              >
                UMUM
              </NavLink>
              <NavLink
                to='sekolah'
                onClick={() => {
                  setShowLinks(!showLinks);
                  setShowGenerateSubMenu(false);
                }}
                className={({ isActive }) =>
                  isActive
                    ? 'bg-user8 rounded-md shadow-xl p-3 my-0.5 mx-1 hover:bg-user8 transition-all'
                    : 'bg-user1 rounded-md shadow-xl p-3 my-0.5 mx-1 hover:bg-user8 transition-all'
                }
              >
                SEKOLAH
              </NavLink>
            </div>
          </div>
          <div>
            <div
              className={`${
                showGenerateSubMenu ? 'bg-user3' : 'bg-user4'
              } flex items-center justify-center rounded-md shadow-xl p-3 m-1 hover:bg-user3 transition-all hover:cursor-pointer`}
              onClick={toggleGenerateSubMenu}
            >
              <span>GENERATE RETEN</span>
              <span className='ml-10'>
                <FaArrowAltCircleUp
                  className={`transition-all ${
                    showGenerateSubMenu && 'rotate-180'
                  }`}
                />
              </span>
            </div>
            <div
              className={`grid transition-all ${
                showGenerateSubMenu ? 'max-h-96' : 'max-h-0 overflow-hidden'
              }`}
            >
              <NavLink
                to='generate-individu'
                onClick={() => {
                  setShowLinks(!showLinks);
                  setShowRetenSubMenu(false);
                }}
                className={({ isActive }) =>
                  isActive
                    ? 'bg-user8 rounded-md shadow-xl p-3 my-0.5 mx-1 hover:bg-user8 transition-all'
                    : 'bg-user1 rounded-md shadow-xl p-3 my-0.5 mx-1 hover:bg-user8 transition-all'
                }
              >
                INDIVIDU
              </NavLink>
              <NavLink
                to='generate-klinik'
                onClick={() => {
                  setShowLinks(!showLinks);
                  setShowRetenSubMenu(false);
                }}
                className={({ isActive }) =>
                  isActive
                    ? 'bg-user8 rounded-md shadow-xl p-3 my-0.5 mx-1 hover:bg-user8 transition-all'
                    : 'bg-user1 rounded-md shadow-xl p-3 my-0.5 mx-1 hover:bg-user8 transition-all'
                }
              >
                KLINIK
              </NavLink>
            </div>
          </div>
          <NavLink
            to='carian'
            onClick={() => {
              setShowLinks(!showLinks);
              setShowRetenSubMenu(false);
              setShowGenerateSubMenu(false);
            }}
            className={({ isActive }) =>
              isActive
                ? 'bg-user3 rounded-md shadow-xl p-3 m-1 hover:bg-user3 transition-all'
                : 'bg-user4 rounded-md shadow-xl p-3 m-1 hover:bg-user3 transition-all'
            }
          >
            CARIAN
          </NavLink>
        </div>
      </nav>
      <div className='absolute w-60 top-0 left-0 flex text-center justify-center h-28'>
        <button
          className='text-2xl bg-userWhite text-userBlack mt-8 mb-8 px-3 rounded-md shadow-xl hover:rotate-90 transition-all'
          onClick={toggleLinks}
        >
          <FaBars />
        </button>
      </div>
    </>
  );
}

export default UserNavbar;
