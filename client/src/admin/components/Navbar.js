import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

function AdminNavbar() {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <>
      <nav
        className={`absolute w-60 h-screen bg-admin2 text-adminWhite text-center top-0 left-0 transition-all ${
          showLinks ? "translate-x-0" : "-translate-x-60"
        }`}
      >
        <div className="h-40"></div>
        <div className="grid">
          <NavLink
            className="bg-admin3 rounded-md shadow-xl p-3 m-1 hover:bg-admin1 transition-all"
            to="/admin/landing/kp"
          >
            KLINIK PERGIGIAN
          </NavLink>
          <NavLink
            className="bg-admin3 rounded-md shadow-xl p-3 m-1 hover:bg-admin1 transition-all"
            to="/admin/landing/pp"
          >
            PEGAWAI PERGIGIAN
          </NavLink>
          <NavLink
            className="bg-admin3 rounded-md shadow-xl p-3 m-1 hover:bg-admin1 transition-all"
            to="/admin/landing/jp"
          >
            JURUTERAPI PERGIGIAN
          </NavLink>
          <NavLink
            className="bg-admin3 rounded-md shadow-xl p-3 m-1 hover:bg-admin1 transition-all"
            to="/admin/landing/taska"
          >
            TASKA
          </NavLink>
          <NavLink
            className="bg-admin3 rounded-md shadow-xl p-3 m-1 hover:bg-admin1 transition-all"
            to="/admin/landing/tadika"
          >
            TADIKA
          </NavLink>
          <NavLink
            className="bg-admin3 rounded-md shadow-xl p-3 m-1 hover:bg-admin1 transition-all"
            to="/admin/landing/sr"
          >
            SEKOLAH RENDAH
          </NavLink>
          <NavLink
            className="bg-admin3 rounded-md shadow-xl p-3 m-1 hover:bg-admin1 transition-all"
            to="/admin/landing/sm"
          >
            SEKOLAH MENENGAH
          </NavLink>
          <NavLink
            className="bg-admin3 rounded-md shadow-xl p-3 m-1 hover:bg-admin1 transition-all"
            to="/admin/landing/ins"
          >
            INSTITUSI
          </NavLink>
        </div>
      </nav>
      <div className="absolute w-60 top-0 left-0 flex text-center justify-center h-40">
        <button
          className="text-2xl bg-adminWhite text-adminBlack mt-14 mb-14 px-3 rounded-md shadow-xl hover:rotate-90 transition-all"
          onClick={toggleLinks}
        >
          <FaBars />
        </button>
      </div>
    </>
  );
}

export default AdminNavbar;
