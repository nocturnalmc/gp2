import React, { useState, useEffect, useContext } from "react";
import { useToken, getTokenized } from "../controllers/Tokenizer";
import axios from "axios";

const AdminAppContext = React.createContext();

function AdminAppProvider({ children }) {
  const { token, setToken } = useToken();

  async function getCurrentUser() {
    let response = await axios.post(
      `http://localhost:5000/api/v1/superadmin/getuser`,
      {
        token: getTokenized(),
      }
    );
    return response;
  }

  return (
    <AdminAppContext.Provider value={{ token, setToken, getCurrentUser }}>
      {children}
    </AdminAppContext.Provider>
  );
}

const useGlobalAdminAppContext = () => {
  return useContext(AdminAppContext);
};

export { AdminAppProvider, useGlobalAdminAppContext };
