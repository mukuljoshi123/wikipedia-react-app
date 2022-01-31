import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchDefaultState {
	searchTypes: string[];
	sortOrders: string[];
	resultsPerPage: number[];
	defaultSearchType: string;
	defaultSortOrder: string;
	defaultResultsPerPage: number;
	searchHistory: string[];
}

const initialState = {
	searchTypes: ["Titles Only", "Titles and Text"],
	sortOrders: ["relevance", "random"],
	resultsPerPage: [1, 2, 3, 4],
	defaultSearchType: "Titles Only",
	defaultSortOrder: "relevance",
	defaultResultsPerPage: 4,
	searchHistory: [],
} as SearchDefaultState;

const searchDefaultReducer = createSlice({
	name: "searchDefault",
	initialState,
	reducers: {
		updateDefaultSearchType(state, action: PayloadAction<string>) {
			state.defaultSearchType = action.payload;
		},
		updateDefaultSortOrder(state, action: PayloadAction<string>) {
			state.defaultSortOrder = action.payload;
		},
		updateDefaultResultsPerPage(state, action: PayloadAction<number>) {
			state.defaultResultsPerPage = action.payload;
		},
		updateSearchHistory(state, action: PayloadAction<string>) {
			if (state.searchHistory.includes(action.payload)) {
			} else {
				if (state.searchHistory.length >= 2) {
					state.searchHistory.pop();
					state.searchHistory.unshift(action.payload);
				} else {
					state.searchHistory.unshift(action.payload);
				}
			}
		},
		deleteSearchHistoryData(state, action: PayloadAction<string>) {
			state.searchHistory = state.searchHistory.filter(
				(history) => history !== action.payload
			);
		},
	},
});

export const searchDefaultActions = searchDefaultReducer.actions;

export default searchDefaultReducer.reducer;
