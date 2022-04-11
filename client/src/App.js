// import './App.css';
import './admin/admin.css';
import AdminHeader from './admin/adminComponents/AdminHeader';
import AdminNavbar from './admin/adminComponents/AdminNavbar';
import AdminLoginForm from './admin/components/AdminLoginForm';
import AdminFooter from './admin/components/AdminFooter';

function App() {
  return (
    <div className='canvas'>
      <AdminHeader />
      <AdminNavbar />
      <AdminLoginForm />
      <AdminFooter />
    </div>
  );
}

export default App;
