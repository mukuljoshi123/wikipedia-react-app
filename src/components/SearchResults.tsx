import { Fragment } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Card from "./UI/Card";
import { RootState } from "../redux/store";
import { IPostData, IPostsList } from "../modules/postsData";
import PaginatedItems from "./utils/pagination";

const SearchResults = () => {
	const postData: IPostData = useSelector((state: any) => state.posts);

	const searchDefaultData = useSelector(
		(state: RootState) => state.searchDefault
	);

	// const displayPosts = postData.posts.map((post) => (
	// 	<Card width="50%">
	// 		<Container>
	// 			<HeaderContainer>
	// 				<h1>{post.title}</h1>
	// 				<p>1 DAY AGO </p>
	// 			</HeaderContainer>
	// 			<p>{post.description}</p>
	// 		</Container>
	// 	</Card>
	// ));

	return (
		<Fragment>
			<Heading>Search Results</Heading>
			{postData.isLoading && (
				<Card width="50%">
					<Status>Loading Data</Status>
				</Card>
			)}
			{!postData.isLoading && postData.posts.length == 0 && (
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

const Container = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px;

	& p {
		font-size: 13px;
		color: #726d6d;
	}
`;

const HeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	& h1 {
		font-size: 12px;
		font-weight: 500;
		color: black;
		margin-bottom: 5px;
	}
	& p {
		color: #868080;
		font-size: 9.5px;
	}
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
