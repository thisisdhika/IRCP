import { SET_ENERGY } from "../types";

export const setEnergy = (user) => {
  return {
    type: SET_ENERGY,
    payload: user,
  };
};
