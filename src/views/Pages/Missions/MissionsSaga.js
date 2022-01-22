import { all, fork, put, call, takeLatest } from "redux-saga/effects";
import {
  setMissionsFailed,
  setMissionsSuccess,
  SET_MISSIONS_REQUEST,
} from "../../../redux/actions/MissionsActions";
import { getAllMissions } from "../../../services";

function* onFetchMissions() {
  try {
    const { error, data } = yield call(getAllMissions);
    console.log("=>", data);
    yield put(setMissionsSuccess(data));
  } catch (e) {
    yield put(setMissionsFailed(e));
  }
}

export function* fetchMissions() {
  yield takeLatest(SET_MISSIONS_REQUEST, onFetchMissions);
}
