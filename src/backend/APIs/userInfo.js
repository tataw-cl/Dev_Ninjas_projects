import React, { useState, useEffect } from 'react';
import { fetchUsers, createUser, updateUser, deleteUser } from './userServices';

const ContentList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  const handleCreateUser = async (user) => {
    try {
      const newUser = await createUser(user);
      setUsers([...users, newUser]);
    } catch (error) {
      setError(error);
    }
  };

  const handleUpdateUser = async (id, updatedUser) => {
    try {
      const user = await updateUser(id, updatedUser);
      setUsers(users.map((u) => (u.id === id ? user : u)));
    } catch (error) {
      setError(error);
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      await deleteUser(id);
      setUsers(users.filter((u) => u.id !== id));
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.username}</p>
          <p>{user.email}</p>
          {/* Add buttons or forms to handle create, update, and delete operations */}
        </div>
      ))}
    </div>
  );
};

export default ContentList;