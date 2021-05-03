import moment from "moment";
import { store } from "../../store";
import { setEnergy } from "../../store/actions/energy";
import energyData from "../../mockData/energy"

export const energyService = {
  get: (date) => {
    const formattedDate = moment(date).format('YYYY-MM');
    const data = energyData.find(item=>item.date===formattedDate)?.data
    return data
  },
  update: async (payload) => {
    return store.dispatch(setEnergy(payload));
  },
};