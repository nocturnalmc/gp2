import { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';

function AdminNavbar() {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight + 20}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);

  return (
    <nav className='nav-container'>
      <div className='nav-header'>
        <button className='nav-toggle' onClick={toggleLinks}>
          <FaBars />
        </button>
      </div>
      <div className='links-container' ref={linksContainerRef}>
        <ul className='links' ref={linksRef}>
          <li>
            <a href='#dashboard'>dashboard</a>
          </li>
          <li>
            <a href='#klinik-pergigian'>klinik pergigian</a>
          </li>
          <li>
            <a href='#pegawai-pergigian'>pegawai pergigian</a>
          </li>
          <li>
            <a href='#juruterapi-pergigian'>juruterapi pergigian</a>
          </li>
          <li>
            <a href='#taska'>taska</a>
          </li>
          <li>
            <a href='#tadika'>tadika</a>
          </li>
          <li>
            <a href='#sekolah-rendah'>sekolah rendah</a>
          </li>
          <li>
            <a href='#sekolah-menengah'>sekolah menengah</a>
          </li>
          <li>
            <a href='#institusi'>institusi</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default AdminNavbar;
