import { all, fork } from "redux-saga/effects";
import { fetchMissions } from "../views/Pages/Missions";

export default function* rootSaga() {
  yield all([fork(fetchMissions)]);
}
