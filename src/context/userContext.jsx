import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchUserData } from '../backend/APIs/db';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const data = await fetchUserData();
        setUsers(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    loadUserData();
  }, []);

  return (
    <UserContext.Provider value={{ users, loading, error }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};