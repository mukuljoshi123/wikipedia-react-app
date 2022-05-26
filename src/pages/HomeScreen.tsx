import styled from "styled-components";

import Footer from "../components/Footer";
import Header from "../components/Header";
import SearchHeader from "../components/SearchHeader";
import SearchResults from "../components/SearchResults";
import EmptySection from "../components/UI/EmptySection";

const HomeScreen = () => {
	return (
		<Container>
			<Header />
			<EmptySection height="1vh" />
			<SearchHeader />
			<EmptySection height="1vh" />
			<Partition />
			<SearchResults />
			<EmptySection height="15vh" />

			<Footer />
		</Container>
	);
};

const Container = styled.div`
	background: #ebe8e8;
	height: 100vh;
`;

const Partition = styled.div`
	border-bottom: 2px solid #9e979767;
	width: 40%;
	margin: 0 auto;
`;

export default HomeScreen;
