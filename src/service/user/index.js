import { store } from "../../store";
import { setUser } from "../../store/actions/auth";

export const userService = {
  update: async (payload) => {
    return store.dispatch(setUser(payload));
  },
};
