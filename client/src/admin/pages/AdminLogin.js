import AdminHeader from '../components/AdminHeader';

import AdminLoginForm from '../components/AdminLoginForm';

import AdminFooter from '../components/AdminFooter';

function AdminLogin() {
  return (
    <>
      <AdminHeader />
      <div className='absolute inset-0 -z-10 flex bg-user4 text-center justify-center items-center capitalize'>
        <div className='w-1/2 h-[25rem] mt-20 mb-5 bg-userWhite outline outline-1 outline-userBlack rounded-md shadow-xl'>
          <AdminLoginForm />
        </div>
      </div>
      <AdminFooter />
    </>
  );
}

export default AdminLogin;
