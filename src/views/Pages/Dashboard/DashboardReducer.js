import { createReducer } from "@reduxjs/toolkit";
import {
  setMissionsFailed,
  setMissionsRequest,
  setMissionsSuccess,
} from "../../../redux/actions/DashboardAction";

const initialState = { loading: false, missions: [], errorMessage: "" };

export const DashboardReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setMissionsRequest, (state, action) => {
      state.loading = true;
      state.errorMessage = "";
      state.missions = [];
    })
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
