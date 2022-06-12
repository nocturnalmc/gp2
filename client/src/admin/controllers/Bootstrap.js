import { BrowserRouter, Routes, Route } from "react-router-dom";

// admin import ------------------------------------------

import { AdminAppProvider } from "./admin/context/adminAppContext";

import AdminLogin from "./admin/pages/AdminLogin";

import AdminAfterLogin from "./admin/pages/AdminAfterLogin";

// defaults
import AdminNavbar from "./admin/components/Navbar";
import AdminFooter from "./admin/components/Footer";

// login form
import AdminLoginForm from "./admin/components/public/LoginForm";

// logged in
import AdminCenterStageLoggedIn from "./admin/components/Centerstage";
import AdminHeaderLoggedIn from "./admin/components/HeaderLoggedIn";

// klinik
import KlinikCenter from "./admin/components/klinik/Center";

// pegawai
import PegawaiCenter from "./admin/components/pegawai/Center";

// jp
import JPCenter from "./admin/components/jp/Center";

// data for facility
import FacilityCenter from "./admin/components/Data";

// misc
import Layout from "./admin/controllers/Layout";
import Fourohfour from "./admin/controllers/Fourohfour";
import { useToken } from "./useToken";

const { token, setToken } = useToken();

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
