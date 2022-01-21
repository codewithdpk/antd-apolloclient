import { all, fork, put, call, takeLatest } from "redux-saga/effects";
import {
  setMissionsFailed,
  setMissionsRequest,
  setMissionsSuccess,
} from "../../../redux/actions/DashboardAction";
import { getAllMissions } from "../../../services";

function* onFetchMissions() {
  try {
    const { response, error } = yield call(getAllMissions);
    yield put(setMissionsSuccess(response.data));
  } catch (e) {
    yield put(setMissionsFailed(e));
  }
}

export function* fetchMissions() {
  yield takeLatest(setMissionsRequest, onFetchMissions);
}
