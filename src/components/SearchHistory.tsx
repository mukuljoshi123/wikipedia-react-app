import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { SearchDefaultActions } from "../redux/searchDefaults/actions";
import { RootState } from "../redux/store";
import Card from "./UI/Card";

const SearchHistory = () => {
	const searchDefaultData = useSelector(
		(state: RootState) => state.searchDefault
	);

	const dispatch = useDispatch();

	const deleteHistoryHandler = (data: any) => {
		dispatch(SearchDefaultActions.setSearchDefault(data));
	};

	const loadHistory = searchDefaultData.searchHistory.map((history) => (
		<HistoryBlock key={history}>
			<p>{history}</p>
			<Button onClick={deleteHistoryHandler.bind(this, history)}>x</Button>
		</HistoryBlock>
	));
	return (
		<Card width="50%">
			<Container>
				<Heading>Search History</Heading>
				{loadHistory.length === 0 ? <p>No history found!!!</p> : loadHistory}
			</Container>
		</Card>
	);
};

const Container = styled.div`
	padding: 10px 5px;

	& p {
		text-align: center;
		font-size: 15px;
	}
`;

const Heading = styled.h1`
	padding-left: 1.2vw;

	font-size: 15px;
	font-weight: 300;
`;

const HistoryBlock = styled.div`
	padding: 5px;
	border: 1px solid transparent black;
	margin: 15px 20px;
	box-shadow: 1px 1px 5px -1px rgba(0, 0, 0, 0.75);
	display: flex;
	justify-content: space-between;
	& p {
		font-size: 14px;
		display: inline-block;
	}
`;

const Button = styled.button`
	background: red;
	transform: translate(65%, 0);
	font-weight: 700;
	border: none;
	font-size: 15px;
	padding: 4px 9px;
	color: white;
	border-radius: 50%;
`;

export default SearchHistory;
