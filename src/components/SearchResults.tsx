import { Fragment } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { IPostState } from "../redux/posts/reducers/postReducer";
import { RootState } from "../redux/store";
import Card from "./UI/Card";
import PaginatedItems from "./utils/pagination";

const SearchResults = () => {
	const postData: IPostState = useSelector((state: any) => state.posts);

	const searchDefaultData = useSelector(
		(state: RootState) => state.searchDefault
	);
	return (
		<Fragment>
			<Heading>Search Results</Heading>
			{postData.isLoading && (
				<Card width="50%">
					<Status>Loading Data</Status>
				</Card>
			)}
			{!postData.isLoading && postData.posts.length === 0 && (
				<Card width="50%">
					<Status>No Data Found</Status>
				</Card>
			)}
			{!postData.isLoading && postData.posts.length !== 0 && (
				<PaginatedItems
					itemsPerPage={searchDefaultData.defaultResultsPerPage}
					items={postData.posts}
				/>
			)}
			<Pages></Pages>
		</Fragment>
	);
};

const Heading = styled.p`
	text-align: center;
	font-size: 36px;
	font-weight: 300;
	margin: 3px;
`;

const Status = styled.div`
	text-align: center;
	font-size: 20px;
	padding: 30px;
`;

const Pages = styled.div`
	background: red;
`;

export default SearchResults;
