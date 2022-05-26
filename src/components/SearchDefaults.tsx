import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { SearchDefaultActions } from "../redux/searchDefaults/actions";
import { RootState } from "../redux/store";
import Card from "./UI/Card";
import { InputOptionsWide } from "./UI/Input";

const SearchDefaults = () => {
	const searchDefaultData = useSelector(
		(state: RootState) => state.searchDefault
	);

	const dispatch = useDispatch();

	const defaultSeachOnHandler = (currentValue: string) => {
		dispatch(
			SearchDefaultActions.setSearchDefault({ defaultSearchType: currentValue })
		);
	};

	const defaultSortOrderHandler = (currentValue: string) => {
		dispatch(
			SearchDefaultActions.setSearchDefault({ defaultSortOrder: currentValue })
		);
	};

	const defaultPageSizeHandler = (currentValue: string) => {
		dispatch(
			SearchDefaultActions.setSearchDefault({
				defaultResultsPerPage: parseInt(currentValue),
			})
		);
	};

	return (
		<Card width="50%">
			<Container>
				<Heading>Search Defaults</Heading>
				<InputOptionsWide
					labelName="DEFAULT SEARCH ON"
					defaultLabel={searchDefaultData.defaultSearchType}
					options={searchDefaultData.searchTypes}
					onSelectChangeHandler={defaultSeachOnHandler}
				/>
				<InputOptionsWide
					labelName="DEFAULT SORT ORDER"
					defaultLabel={searchDefaultData.defaultSortOrder}
					options={searchDefaultData.sortOrders}
					onSelectChangeHandler={defaultSortOrderHandler}
				/>
				<InputOptionsWide
					labelName="RESULTS PER PAGE"
					defaultLabel={searchDefaultData.defaultResultsPerPage}
					options={searchDefaultData.resultsPerPage}
					onSelectChangeHandler={defaultPageSizeHandler}
				/>
			</Container>
		</Card>
	);
};

const Container = styled.div`
	padding: 10px 5px;
`;

const Heading = styled.h1`
	padding-left: 0.7vw;
	margin-bottom: 10px;
	font-size: 15px;
	font-weight: 300;
`;

export default SearchDefaults;
