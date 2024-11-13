import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from './redux/userSlice';
import TodoList from './TodoList';

const Profile = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <h2>Profile</h2>
      <p>Username: {user.username}</p>
      <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <button onClick={handleLogout}>Logout</button>
      <TodoList />
    </div>
  );
};

export default Profile;