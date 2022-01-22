import { createReducer } from "@reduxjs/toolkit";
import { setTab } from "../../../redux/actions/SlidersAction";

const initialState = { selectedMenu: 1 };

export const SliderRedcuer = createReducer(initialState, (builder) => {
  builder.addCase(setTab, (state, action) => {
    state.selectedMenu = action.payload;
  });
});
