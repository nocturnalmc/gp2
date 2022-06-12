import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import { useGlobalUserAppContext } from '../context/userAppContext';

function UserProtectedRoute({ children }) {
  const { userToken } = useGlobalUserAppContext();

  const [isTokenCorrect, setIsTokenCorrect] = useState(null);

  useEffect(() => {
    const fetchIdentity = async () => {
      try {
        await axios.get('/api/v1/identity', {
          headers: { Authorization: `Bearer ${userToken}` },
        });
        setIsTokenCorrect(true);
      } catch (error) {
        localStorage.removeItem('userToken');
        localStorage.removeItem('username');
        setIsTokenCorrect(false);
      }
    };
    fetchIdentity();
  }, [userToken]);

  if (isTokenCorrect === false) {
    return <Navigate to='/' />;
  }
  if (isTokenCorrect === true) {
    return children;
  }
}

export default UserProtectedRoute;
