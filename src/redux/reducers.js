import { combineReducers } from "redux";
import { DashboardReducer } from "../views/Pages/Dashboard";

export const rootReducer = combineReducers({
  dashboard: DashboardReducer,
});
