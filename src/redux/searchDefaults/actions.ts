import { SEARCH_DEFAULTS } from "./actionTypes";
import { ISearchDefaultState } from "./reducer";

const getSearchDefault = (data: {
	defaultSearchType?: string;
	defaultSortOrder?: string;
	defaultResultsPerPage?: number;
	searchHistory?: string;
	type: string;
	state: ISearchDefaultState;
}) => {
	return {
		type: SEARCH_DEFAULTS.GET_SEARCH_DEFAULTS.REQUEST,
		payload: data,
	};
};

const setSearchDefault = (data: {
	defaultSearchType?: string;
	defaultSortOrder?: string;
	defaultResultsPerPage?: number;
	searchHistory?: string[];
}) => {
	return {
		type: SEARCH_DEFAULTS.GET_SEARCH_DEFAULTS.SUCCESS,
		payload: data,
	};
};

export const SearchDefaultActions = {
	setSearchDefault,
	getSearchDefault,
};
