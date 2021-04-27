import { LOGIN, LOGOUT, SET_USER, SET_PASSWORD } from "../types";

//Action
export const login = (user) => {
  localStorage.setItem("token", user.token);
  localStorage.setItem("role", user.role);
  return {
    type: LOGIN,
    payload: user,
  };
};

export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

export const logout = () => {
  localStorage.clear();
  return {
    type: LOGOUT,
  };
};

export const resetPassword = (password) => {
  return {
    type: SET_PASSWORD,
    payload: password,
  };
};
