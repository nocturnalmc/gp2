import { BrowserRouter, Routes, Route } from "react-router-dom";

// admin import

import { AdminAppProvider } from "./admin/context/adminAppContext";
import AdminLoginForm from "./admin/components/public/LoginForm";
import AdminProtectedRoute from "./admin/pages/AdminProtectedRoute";
import AdminAfterLogin from "./admin/pages/AdminAfterLogin";
// import { useToken } from "./admin/controllers/Tokenizer";

// user

import { UserAppProvider } from "./user/context/userAppContext";
import UserLogin from "./user/pages/UserLogin";
import UserProtectedRoute from "./user/pages/UserProtectedRoute";
import UserAfterLogin from "./user/pages/UserAfterLogin";

import UserNotFound from "./user/pages/UserNotFound";

const App = () => {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       {/* <Route index element={<AdminPage />} /> */}
    //       {/* <Route path="loggedin" element={<LoggedIn />} /> */}
    //       <Route index element={<LoggedIn />} />
    //       <Route path="kp" element={<Klinik />} />
    //       <Route path="pp" element={<PP />} />
    //       <Route path="jp" element={<JP />} />
    //       <Route path="taska" element={<Taska />} />
    //       <Route path="tadika" element={<Tadika />} />
    //       <Route path="sr" element={<SR />} />
    //       <Route path="sm" element={<SM />} />
    //       <Route path="ins" element={<Institusi />} />
    //       <Route path="*" element={<Fourohfour />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    <>
      <BrowserRouter>
        <UserAppProvider>
          <Routes>
            <Route path="/" element={<UserLogin />} />
            <Route
              path="/user/*"
              element={
                <UserProtectedRoute>
                  <UserAfterLogin />
                </UserProtectedRoute>
              }
            />
            <Route path="*" element={<UserNotFound />} />
          </Routes>
        </UserAppProvider>
        <AdminAppProvider>
          <Routes>
            <Route path="/admin" element={<AdminLoginForm />} />
            <Route
              path="/admin/landing/*"
              element={
                <AdminProtectedRoute>
                  <AdminAfterLogin />
                </AdminProtectedRoute>
              }
            />
          </Routes>
        </AdminAppProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
