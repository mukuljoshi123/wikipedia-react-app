import { SEARCH_DEFAULTS } from "./actionTypes";

export interface ISearchDefaultState {
	searchTypes: string[];
	sortOrders: string[];
	resultsPerPage: number[];
	defaultSearchType: string;
	defaultSortOrder: string;
	defaultResultsPerPage: number;
	searchHistory: string[];
}

export const searchDefaultInitialState: ISearchDefaultState = {
	searchTypes: ["Titles Only", "Titles and Text"],
	sortOrders: ["relevance", "random"],
	resultsPerPage: [1, 2, 3, 4],
	defaultSearchType: "Titles Only",
	defaultSortOrder: "relevance",
	defaultResultsPerPage: 4,
	searchHistory: [],
};

const searchDefaultReducerNew = (
	state = searchDefaultInitialState,
	action: { payload: any; type: string }
): ISearchDefaultState => {
	switch (action.type) {
		case SEARCH_DEFAULTS.GET_SEARCH_DEFAULTS.SUCCESS:
			const {
				defaultSearchType,
				defaultResultsPerPage,
				defaultSortOrder,
				searchHistory,
			} = action.payload;
			return {
				...state,
				defaultSearchType:
					defaultSearchType != null
						? defaultSearchType
						: state.defaultSearchType,
				defaultSortOrder:
					defaultSortOrder != null ? defaultSortOrder : state.defaultSortOrder,
				defaultResultsPerPage:
					defaultResultsPerPage != null
						? defaultResultsPerPage
						: state.defaultResultsPerPage,
				searchHistory:
					searchHistory != null ? searchHistory : state.searchHistory,
			};
		case SEARCH_DEFAULTS.GET_SEARCH_DEFAULTS.LOADING: {
			return;
		}
		default:
			return state;
	}
};

export default searchDefaultReducerNew;
