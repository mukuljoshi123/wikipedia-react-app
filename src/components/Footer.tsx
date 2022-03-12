import styled from "styled-components";
import AppIcon from "../assets/images/app-icon.png";
import UpArrow from "../assets/images/up-arrow.png";
import { Button } from "./atoms/Button";

const Footer = () => {
	return (
		<Container>
			<ArrowUp>
				<img src={UpArrow} alt="up-arrow" />
			</ArrowUp>
			<ContainerData>
				<HeaderImage src={AppIcon} alt="app-icon" />
				<HeaderElement>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s.
				</HeaderElement>
				<Button onSubmitHandler={() => {}} buttonText="English" />
			</ContainerData>
		</Container>
	);
};

const Container = styled.div`
	background-color: white;
	padding: 5rem 0 5rem 0;
	display: flex;
	position: relative;
`;

const ArrowUp = styled.div`
	position: absolute;
	margin: 0 auto;
	top: 0;
	left: 45%;
	background: white;
	border-radius: 50%;
	padding: 15px;
	text-align: center;
	width: 25px;
	height: 25px;
	border: 8px solid #ebe8e8;
	transform: translate(50%, -50%);

	& img {
		width: 18px;
		height: 18px;
		padding-top: 3px;
		text-align: center;
	}
`;

const HeaderImage = styled.img`
	width: 30px;
	padding: 5px 20px;
`;

const HeaderElement = styled.p`
	font-size: 11.8px;
	width: 60%;
	color: #7c7777;
	padding: 5px 10px;
`;

const ContainerData = styled.div`
	width: 70%;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export default Footer;
