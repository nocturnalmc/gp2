import React, { useState, useEffect, useContext } from 'react';

const AdminAppContext = React.createContext();

function AdminAppProvider({ children }) {
  const [user, setUserName] = useState('');

  return (
    <AdminAppContext.Provider value={{ user, setUserName }}>
      {children}
    </AdminAppContext.Provider>
  );
}

const useGlobalAdminAppContext = () => {
  return useContext(AdminAppContext);
};

export { AdminAppProvider, useGlobalAdminAppContext };
