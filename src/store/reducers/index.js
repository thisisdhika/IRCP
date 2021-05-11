import { combineReducers } from "redux"
import AuthReducer from "./auth"

const RootReducer = combineReducers({
  auth: AuthReducer,
})

export default RootReducer
