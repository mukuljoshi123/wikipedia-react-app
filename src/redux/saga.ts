import { all } from "redux-saga/effects";
import getPostWatcherSaga from "./posts/saga/saga";
import getSearchDefaultsWatcherSaga from "./searchDefaults/saga";

export default function* rootSaga() {
	yield all([getPostWatcherSaga(), getSearchDefaultsWatcherSaga()]);
}
