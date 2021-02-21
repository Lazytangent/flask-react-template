import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";

const User = () => {
  const [user, setUser] = useState({});
  const users = useSelector(state => state.users);
  const { userId }  = useParams();

  useEffect(() => {
    if (!userId) {
      return
    }
    if (users) {
      setUser(users[userId]);
    }
  }, [userId]);

  if (!user) {
    return null;
  }

  return (
    <ul>
      <li>
        <strong>User Id</strong> {userId}
      </li>
      <li>
        <strong>Username</strong> {user.username}
      </li>
      <li>
        <strong>Email</strong> {user.email}
      </li>
    </ul>
  );
};

export default User;
