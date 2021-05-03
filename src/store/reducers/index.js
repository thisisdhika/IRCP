import { combineReducers } from "redux"
import AuthReducer from "./auth"
import EnergyReducer from "./energy"

const RootReducer = combineReducers({
  auth: AuthReducer,
  energy: EnergyReducer
})

export default RootReducer
