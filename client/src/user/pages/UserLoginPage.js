import { Outlet } from 'react-router-dom';
import UserHeader from '../components/UserHeader';
import UserLogin from './UserLogin';
import UserFooter from '../components/UserFooter';

const UserLoginPage = () => {
  return (
    <>
      <UserHeader />
      <UserLogin />
      <UserFooter />
    </>
  );
};

export default UserLoginPage;