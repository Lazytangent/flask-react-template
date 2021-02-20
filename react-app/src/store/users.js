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
    dispatch(setUsers(users));
  }
  return data;
};

const initialState = {
  users: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, users: action.users };
    case REMOVE_SESSION:
      return { ...state, users: [] };
    default:
      return state;
  }
};

export default usersReducer;
