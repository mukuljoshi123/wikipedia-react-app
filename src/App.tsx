import { Route } from "react-router-dom";
import styled from "styled-components";
import HomeScreen from "./pages/HomeScreen";
import LoginScreen from "./pages/LoginScreen";
import SettingsScreen from "./pages/SettingsScreen";

const App = () => {
	return (
		<Container>
			<Route exact path="/home">
				<HomeScreen />
			</Route>
			<Route exact path="/">
				<LoginScreen />
			</Route>
			<Route exact path="/settings">
				<SettingsScreen />
			</Route>
		</Container>
	);
};

export default App;

const Container = styled.div`
	width: 100vw;
	height: 100vh;
`;
