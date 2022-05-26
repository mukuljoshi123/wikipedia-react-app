import moment from "moment-timezone";
import { type } from "os";
import { Route } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./components/atoms/button";
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
		// <Button title="Test Button" buttonStyles={styles.promAlert} />
	);
};

export default App;

const styles = {
	promAlert: {
		backgroundColor: "black",
	},
} as const;

const Container = styled.div`
	width: 100vw;
	height: 100vh;
`;
