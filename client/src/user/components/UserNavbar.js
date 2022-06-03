import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

function UserNavbar() {
  const [showLinks, setShowLinks] = useState(false);
  const [showSubMenu, setshowSubMenu] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const toggleSubMenu = () => {
    setshowSubMenu(!showSubMenu);
  };

  return (
    <>
      <nav
        className={`absolute w-60 h-screen bg-user2 text-userWhite text-center top-0 left-0 transition-all ${
          showLinks ? 'translate-x-0' : '-translate-x-60'
        }`}
      >
        <div className='h-40'></div>
        <div className='grid'>
          <NavLink
            to='/user'
            className='bg-user3 rounded-md shadow-xl p-3 m-1 hover:bg-user1 transition-all'
          >
            DASHBOARD
          </NavLink>
          <div >
            <div className='bg-user3 rounded-md shadow-xl p-3 m-1 hover:bg-user1 transition-all'
              onClick={toggleSubMenu}
            >
              <span>
                RETEN KLINIK PERGIGIAN
              </span>
            </div>
            <div className={`transition-all ${showSubMenu ? 'block' : 'hidden'}`}>
              <div className='bg-user5 rounded-md shadow-xl p-3 m-1 hover:bg-user6 transition-all'>
                <NavLink
                to='taska'
                >
                  KLINIK PERGIGIAN
                </NavLink>
              </div>
              <div className='bg-user5 rounded-md shadow-xl p-3 m-1 hover:bg-user6 transition-all'>
                <NavLink
                to='sekolah'
                >
                  SEKOLAH
                </NavLink>
              </div>
            </div>
          </div>
          <NavLink
            to='taska'
            className='bg-user3 rounded-md shadow-xl p-3 m-1 hover:bg-user1 transition-all'
          >
            STATUS HARIAN
          </NavLink>
          <NavLink
            to='/user/institusi'
            className='bg-user3 rounded-md shadow-xl p-3 m-1 hover:bg-user1 transition-all'
          >
            GENERATE RETEN
          </NavLink>
          <NavLink
            to='/user/generate'
            className='bg-user3 rounded-md shadow-xl p-3 m-1 hover:bg-user1 transition-all'
          >
            CARIAN
          </NavLink>
        </div>
      </nav>
      <div className='absolute w-60 top-0 left-0 flex text-center justify-center h-40'>
        <button
          className='text-2xl bg-userWhite text-userBlack mt-14 mb-14 px-3 rounded-md shadow-xl hover:rotate-90 transition-all'
          onClick={toggleLinks}
        >
          <FaBars />
        </button>
      </div>
    </>
  );
}

export default UserNavbar;
