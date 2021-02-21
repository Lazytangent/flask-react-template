import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { NavLink } from "react-router-dom";

import { getUsers } from '../store/users';

const UsersList = () => {
  const dispatch = useDispatch();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await dispatch(getUsers());
      if (!data.errors) {
        setUsers(data.users);
      }
    })();
  }, [dispatch]);

  const userComponents = users.map((user) => {
    return (
      <li key={user.id}>
        <NavLink to={`/users/${user.id}`}>{user.username}</NavLink>
      </li>
    );
  });

  return (
    <>
      <h1>User List: </h1>
      <ul>{userComponents}</ul>
    </>
  );
};

export default UsersList;
