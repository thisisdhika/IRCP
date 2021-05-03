import { SET_ENERGY } from "../types";

const initialState = {
  energy: {
    lastYearEnergyCost: 0,
    lastYearEnergyConsumption: 0,
    currentYearEnergyCost: 0,
    currentYearEnergyConsumption: 0,
    monthlyEnergyConsumption: 0,
    thisMonthEnergyConsumption: 0,
    thisMonthEnergySaving: 0,
  },
};

const EnergyReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ENERGY: return action.payload
    default:
      return state;
  }
};

export default EnergyReducer;
