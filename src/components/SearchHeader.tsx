import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { PostActions } from "../redux/posts/actions/actions";
import { SearchDefaultActions } from "../redux/searchDefaults/actions";
import { SEARCH_DEFAULTS_SUB_ACTIONS_TYPE } from "../redux/searchDefaults/saga";
import { RootState } from "../redux/store";
import { Button } from "./atoms/button";
import { Input, InputOptions } from "./UI/Input";

const SearchHeader = () => {
	const searchDefaultData = useSelector(
		(state: RootState) => state.searchDefault
	);

	const [textPresent, setTextPresent] = useState(false);

	const dispatch = useDispatch();

	const [searchText, setSearchText] = useState("");
	const [searchOn, setSearchOn] = useState(searchDefaultData.defaultSearchType);
	const [sortBy, setSortBy] = useState(searchDefaultData.defaultSortOrder);

	const onSearchTermChangeHandler = (currentValue: string) => {
		if (currentValue.length > 0) {
			setTextPresent(true);
		} else {
			setTextPresent(false);
		}
		setSearchText(currentValue);
	};

	const onSearchOnChangeHandler = (currentValue: string) => {
		setSearchOn(currentValue);
	};
	const onSortByChangeHandler = (currentValue: string) => {
		setSortBy(currentValue);
	};

	const OnSubmitHandler = () => {
		dispatch(
			PostActions.getPost({
				searchText: searchText,
				searchOn: searchOn,
				sortBy: sortBy,
				resultsPerPage: searchDefaultData.defaultResultsPerPage,
			})
		);
		dispatch(
			SearchDefaultActions.getSearchDefault({
				searchHistory: searchText,
				type: SEARCH_DEFAULTS_SUB_ACTIONS_TYPE.UPDATE_SEARCH_HISTORY,
				state: searchDefaultData,
			})
		);
	};

	return (
		<Container>
			<SearchInputContainer>
				<InputOptions
					labelName="SEARCH ON"
					defaultLabel={searchOn}
					options={searchDefaultData.searchTypes}
					onSelectChangeHandler={onSearchOnChangeHandler}
				/>
				<Input
					onsearchTermChangeHandler={onSearchTermChangeHandler}
					labelName="SEARCH TERM"
					defaultValue={searchText}
				/>
				<InputOptions
					labelName="SORT BY"
					onSelectChangeHandler={onSortByChangeHandler}
					defaultLabel={sortBy}
					options={searchDefaultData.sortOrders}
				/>
			</SearchInputContainer>
			<Button
				onPress={OnSubmitHandler}
				title="submit"
				disabled={!textPresent}
			/>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	align-items: center;
`;

const SearchInputContainer = styled.div`
	display: flex;
	margin: 0 auto;
	width: 50%;
	align-items: center;
	justify-content: center;
`;

export default SearchHeader;
