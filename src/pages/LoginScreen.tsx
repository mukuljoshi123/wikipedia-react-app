import Footer from "../components/Footer";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import EmptySection from "../components/UI/EmptySection";
import styled from "styled-components";

const LoginScreen = () => {
	return (
		<Container>
			<Header />
			<EmptySection height="10vh" />
			<LoginForm />
			<EmptySection height="20vh" />
			<Footer />
		</Container>
	);
};

const Container = styled.div`
	background: #ebe8e8;
	height: 100vh;
`;

export default LoginScreen;
