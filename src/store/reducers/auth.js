import { SET_USER, SET_PASSWORD, LOGIN, LOGOUT } from "../types";

const initialState = {
  loggedIn: !!localStorage.getItem("token"),
  role: localStorage.getItem("role"),
  user: {},
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
      };
    case SET_PASSWORD:
      return {
        ...state,
        user: {
          ...state.user,
          password: action.payload,
        },
      };
    case LOGIN:
      return {
        ...state,
        loggedIn: true,
        user: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        loggedIn: false,
        user: {},
      };
    default:
      return state;
  }
};

export default AuthReducer;
