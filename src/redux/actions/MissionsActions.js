import { createAction } from "@reduxjs/toolkit";
export const SET_MISSIONS_REQUEST = "SET_MISSIONS_REQUEST";
export const SET_MISSIONS_SUCCESS = "SET_MISSIONS_SUCCESS";
export const SET_MISSIONS_FAILED = "SET_MISSIONS_FAILED";

export const setMissionsRequest = createAction(SET_MISSIONS_REQUEST);
export const setMissionsSuccess = createAction(SET_MISSIONS_SUCCESS);
export const setMissionsFailed = createAction(SET_MISSIONS_FAILED);
