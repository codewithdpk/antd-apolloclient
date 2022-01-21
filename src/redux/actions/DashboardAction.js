import { createAction } from "@reduxjs/toolkit";

export const setMissionsRequest = createAction("setMissionRequest");
export const setMissionsSuccess = createAction("setMissionSuccess");
export const setMissionsFailed = createAction("setMissionFailed");
