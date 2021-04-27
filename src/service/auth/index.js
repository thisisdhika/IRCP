import { store } from "../../store";
import { login, resetPassword, setUser } from "../../store/actions/auth";
import users from "../../mockData/users";

export const authService = {
  get: () => {
    const email = localStorage.getItem("token");

    if (!email) {
      throw new Error("Unauthorized");
    }

    return store.dispatch(setUser(users[atob(email)]));
  },

  login: async (email, password) => {
    const user = users[email];

    if (!user || user?.password !== password) {
      throw new Error("wrong username or password.");
    }

    user.token = btoa(user.email);

    return store.dispatch(login(user));
  },

  isEmailExist: (email) => {
    const user = users[email];
    if (!user || user.email !== email) {
      return false;
    }
    return true;
  },

  resetPassword: async (password, linktoken) => {
    //  Perform Update to API
    return store.dispatch(resetPassword(password));
  },
};
