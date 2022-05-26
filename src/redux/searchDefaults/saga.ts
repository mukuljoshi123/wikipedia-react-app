import { put, takeLatest } from "redux-saga/effects";
import { IFluxStandardAction } from "../../store/interfaces";
import { SearchDefaultActions } from "./actions";
import { SEARCH_DEFAULTS } from "./actionTypes";
import { ISearchDefaultState } from "./reducer";

export const SEARCH_DEFAULTS_SUB_ACTIONS_TYPE = {
	UPDATE_DEFAULT_SEARCH_TYPE: "UPDATE_DEFAULT_SEARCH_TYPE",
	UPDATE_DEFAULT_SORT_ORDER: "UPDATE_DEFAULT_SORT_ORDER",
	UPDATE_DEFAULT_RESULTS_PER_PAGE: "UPDATE_DEFAULT_RESULTS_PER_PAGE",
	UPDATE_SEARCH_HISTORY: "UPDATE_SEARCH_HISTORY",
	DELETE_SEARCH_HISTORY: "DELETE_SEARCH_HISTORY",
};

function* getSearchDefaultsWorkerSaga(
	value: IFluxStandardAction<{
		defaultSearchType?: string;
		defaultSortOrder?: string;
		defaultResultsPerPage?: number;
		searchHistory?: string;
		type: string;
		state: ISearchDefaultState;
	}>
) {
	const { payload } = value;
	const searchDefaultData = payload.state;

	switch (payload.type) {
		case SEARCH_DEFAULTS_SUB_ACTIONS_TYPE.UPDATE_DEFAULT_SEARCH_TYPE: {
			yield put(
				SearchDefaultActions.setSearchDefault({
					defaultSearchType: payload.defaultSearchType,
				})
			);
			return;
		}
		case SEARCH_DEFAULTS_SUB_ACTIONS_TYPE.UPDATE_DEFAULT_SORT_ORDER: {
			yield put(
				SearchDefaultActions.setSearchDefault({
					defaultSortOrder: payload.defaultSortOrder,
				})
			);
			return;
		}
		case SEARCH_DEFAULTS_SUB_ACTIONS_TYPE.UPDATE_DEFAULT_RESULTS_PER_PAGE: {
			yield put(
				SearchDefaultActions.setSearchDefault({
					defaultResultsPerPage: payload.defaultResultsPerPage,
				})
			);
			return;
		}
		case SEARCH_DEFAULTS_SUB_ACTIONS_TYPE.UPDATE_SEARCH_HISTORY: {
			const history = [...searchDefaultData.searchHistory];
			if (history.includes(payload.searchHistory)) {
			} else {
				if (history.length >= 2) {
					history.pop();
					history.unshift(payload.searchHistory);
				} else {
					history.unshift(payload.searchHistory);
				}
			}
			yield put(
				SearchDefaultActions.setSearchDefault({
					searchHistory: history,
				})
			);
			return;
		}
		case SEARCH_DEFAULTS_SUB_ACTIONS_TYPE.DELETE_SEARCH_HISTORY: {
			let history = [...searchDefaultData.searchHistory];
			history = history.filter((history) => history !== payload.searchHistory);
			yield put(
				SearchDefaultActions.setSearchDefault({
					searchHistory: history,
				})
			);
			return;
		}
		default:
			return;
	}
}

export default function* getSearchDefaultsWatcherSaga() {
	yield takeLatest(
		SEARCH_DEFAULTS.GET_SEARCH_DEFAULTS.REQUEST,
		getSearchDefaultsWorkerSaga
	);
}
