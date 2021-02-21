import { REMOVE_SESSION } from './session';

const SET_USERS = 'users/SET_USERS';

const setUsers = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};

export const getUsers = () => async (dispatch) => {
  const response = await fetch('/api/users');
  const data = await response.json();
  if (!data.errors) {
    dispatch(setUsers(data.users));
  }
  return data;
};

const initialState = {};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      const users = {};
      action.users.forEach(user => {
        users[user.id] = user;
      });
      return users;
    case REMOVE_SESSION:
      return { ...state, users: [] };
    default:
      return state;
  }
};

export default usersReducer;
