import { createReducer } from "@reduxjs/toolkit";
import {
  setMissionsFailed,
  setMissionsSuccess,
} from "../../../redux/actions/DashboardAction";

const initialState = { loading: true, missions: [], errorMessage: "" };

export const DashboardReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setMissionsSuccess, (state, action) => {
      state.loading = false;
      state.missions = action.payload;
    })
    .addCase(setMissionsFailed, (state, action) => {
      state.loading = false;
      state.missions = [];
      state.errorMessage = action.payload;
    });
});
