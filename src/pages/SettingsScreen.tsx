import styled from "styled-components";

import Footer from "../components/Footer";
import Header from "../components/Header";
import SearchDefaults from "../components/SearchDefaults";
import SearchHistory from "../components/SearchHistory";
import EmptySection from "../components/UI/EmptySection";

const SettingsScreen = () => {
	return (
		<Container>
			<Header />
			<EmptySection height="1vh" />
			<Title>Settings</Title>
			<SubTitle>Manage search settings and history</SubTitle>
			<SearchHistory />
			<EmptySection height="2vh" />

			<SearchDefaults />
			<EmptySection height="15vh" />
			<Footer />
		</Container>
	);
};

const Container = styled.div`
	background: #ebe8e8;
	height: 100vh;
`;


const Title = styled.h1`
	padding-left: 25vw;
	font-size: 35px;
	font-weight: 300;
`;

const SubTitle = styled.p`
	padding-left: 25vw;
	margin-bottom: 15px;
`;

export default SettingsScreen;
