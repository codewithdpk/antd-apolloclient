import { all, fork } from "redux-saga/effects";
import { fetchMissions } from "../views/Pages/Dashboard/DashboardSaga";

export default function* rootSaga() {
  yield all([fork(fetchMissions)]);
}
