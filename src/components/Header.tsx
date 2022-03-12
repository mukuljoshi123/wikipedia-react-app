import { Link } from "react-router-dom";
import styled from "styled-components";
import AppIcon from "../assets/images/app-icon.png";
import { ButtonPlain } from "./atoms/Button";

type HeaderDataProps = {
	justifyContent?: string;
	color?: string;
};

const onHomeButtonClickHandler = () => {};

const Header = () => {
	return (
		<Container>
			<ContainerData>
				<HeaderData justifyContent="flex-start">
					<HeaderImage src={AppIcon} alt="app-icon" />
					<HeaderTitle>WIKIPEDIA SEARCH APP</HeaderTitle>
				</HeaderData>
				<HeaderData justifyContent="flex-end" color="#a09a9a">
					<HeaderElement>
						<Link to="/home">HOME</Link>
					</HeaderElement>
					<HeaderElement>
						<Link to="/settings">SETTINGS</Link>
					</HeaderElement>
					<HeaderElement>
						<Link to="/">LOGIN</Link>
					</HeaderElement>
				</HeaderData>
			</ContainerData>
		</Container>
	);
};

const Container = styled.div`
	background-color: #ffffff;
	display: flex;
`;

const HeaderImage = styled.img`
	width: 30px;
	padding: 5px 20px;
`;

const HeaderElement = styled.div`
	font-size: 9px;
	padding: 5px 10px;
`;

const HeaderTitle = styled.div`
	font-size: 11.3px;
`;

const HeaderData = styled.div<HeaderDataProps>`
	width: 30%;
	display: flex;
	align-items: center;
	justify-content: ${(props) => props.justifyContent};
	color: ${(props) => (props.color ? props.color : "black")};
`;

const ContainerData = styled.div`
	width: 70%;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export default Header;
