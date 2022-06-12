import { Routes, Route } from "react-router-dom";

import AdminLoginForm from "../components/public/LoginForm";
import AdminLoggedInNotFound from "./AdminLoggedInNotFound";

// defaults
import AdminNavbar from "../components/Navbar";
import AdminFooter from "../components/Footer";

// logged in
import AdminCenterStageLoggedIn from "../components/Centerstage";
import AdminHeaderLoggedIn from "../components/HeaderLoggedIn";

// klinik
import KlinikCenter from "../components/klinik/Center";

// pegawai
import PegawaiCenter from "../components/pegawai/Center";

// jp
import JPCenter from "../components/jp/Center";

// data for facility
import FacilityCenter from "../components/Data";

import { useGlobalAdminAppContext } from "../context/adminAppContext";

function AdminAfterLogin() {
  const { token, setToken } = useGlobalAdminAppContext();

  function LoggedIn() {
    return (
      <>
        <AdminHeaderLoggedIn />
        <AdminNavbar />
        <AdminCenterStageLoggedIn />
        <AdminFooter />
      </>
    );
  }

  function Klinik() {
    return (
      <>
        <AdminHeaderLoggedIn />
        <AdminNavbar />
        <KlinikCenter />
        <AdminFooter />
      </>
    );
  }

  function PP() {
    return (
      <>
        <AdminHeaderLoggedIn />
        <AdminNavbar />
        <PegawaiCenter />
        <AdminFooter />
      </>
    );
  }

  function JP() {
    return (
      <>
        <AdminHeaderLoggedIn />
        <AdminNavbar />
        <JPCenter />
        <AdminFooter />
      </>
    );
  }

  function Taska() {
    return (
      <>
        <AdminHeaderLoggedIn />
        <AdminNavbar />
        <FacilityCenter FType="taska" />
        <AdminFooter />
      </>
    );
  }

  function Tadika() {
    return (
      <>
        <AdminHeaderLoggedIn />
        <AdminNavbar />
        <FacilityCenter FType="tadika" />
        <AdminFooter />
      </>
    );
  }

  function SR() {
    return (
      <>
        <AdminHeaderLoggedIn />
        <AdminNavbar />
        <FacilityCenter FType="sr" />
        <AdminFooter />
      </>
    );
  }

  function SM() {
    return (
      <>
        <AdminHeaderLoggedIn />
        <AdminNavbar />
        <FacilityCenter FType="sm" />
        <AdminFooter />
      </>
    );
  }

  function Institusi() {
    return (
      <>
        <AdminHeaderLoggedIn />
        <AdminNavbar />
        <FacilityCenter FType="ins" />
        <AdminFooter />
      </>
    );
  }

  if (!token) {
    return <AdminLoginForm />;
  }

  return (
    <>
      <Routes>
        <Route index element={<LoggedIn />} />
        <Route path="kp" element={<Klinik />} />
        <Route path="pp" element={<PP />} />
        <Route path="jp" element={<JP />} />
        <Route path="taska" element={<Taska />} />
        <Route path="tadika" element={<Tadika />} />
        <Route path="sr" element={<SR />} />
        <Route path="sm" element={<SM />} />
        <Route path="ins" element={<Institusi />} />
        <Route path="*" element={<AdminLoggedInNotFound />} />
      </Routes>
    </>
  );
}

export default AdminAfterLogin;
