import { combineReducers } from "redux";
import { SliderRedcuer } from "../components/shared/SliderMenu";
import { MissionsReducer } from "../views/Pages/Missions";

export const rootReducer = combineReducers({
  missions: MissionsReducer,
  slider: SliderRedcuer,
});
