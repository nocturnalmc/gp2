import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { UserAppProvider } from './user/context/userAppContext';

import UserLogin from './user/pages/UserLogin';

import UserProtectedRoute from './user/pages/UserProtectedRoute';
import UserAfterLogin from './user/pages/UserAfterLogin';

import UserNotFound from './user/pages/UserNotFound';

// admin import ------------------------------------------

import { AdminAppProvider } from './admin/context/adminAppContext';

import AdminLogin from './admin/pages/AdminLogin';

import AdminAfterLogin from './admin/pages/AdminAfterLogin';

// import './admin/admin.css';
// import AdminHeader from './admin/components/AdminHeader';
// import AdminNavbar from './admin/components/AdminNavbar';
// import AdminLoginForm from './admin/components/AdminLoginForm';
// import AdminSelamatDatang from './admin/components/AdminSelamatDatang';
// import AdminFooter from './admin/components/AdminFooter';

function App() {
  return (
    <>
      <BrowserRouter>
        <UserAppProvider>
          <Routes>
            <Route path='/' element={<UserLogin />} />
            <Route
              path='/user/*'
              element={
                <UserProtectedRoute>
                  <UserAfterLogin />
                </UserProtectedRoute>
              }
            />
            <Route path='*' element={<UserNotFound />} />
          </Routes>
        </UserAppProvider>
        <AdminAppProvider>
          <Routes>
            <Route path='/admin' element={<AdminLogin />} />
            <Route path='/admin/landing/*' element={<AdminAfterLogin />} />
          </Routes>
        </AdminAppProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
