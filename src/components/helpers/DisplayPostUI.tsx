import { Fragment } from "react";
import styled from "styled-components";
import { IPostsList } from "../../redux/posts/reducers/postReducer";
import Card from "../UI/Card";

interface IProps {
	currentItems: IPostsList[];
}

const DisplayPostUI = (props: IProps) => {
	const displayPosts =
		props.currentItems !== null
			? props.currentItems.map((post) => (
					<Card width="50%">
						<Container>
							<HeaderContainer>
								<h1>{post.title}</h1>
								<p>1 DAY AGO </p>
							</HeaderContainer>
							<p>{post.description}</p>
						</Container>
					</Card>
			  ))
			: null;

	return <Fragment>{props.currentItems && displayPosts}</Fragment>;
};

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

export default DisplayPostUI;
