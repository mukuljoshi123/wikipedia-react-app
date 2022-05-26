import styled from "styled-components";

interface IButtonProps {
	buttonText: string;
	disabled?: boolean;
	width?: string;
	onPress: () => void;
}

interface IProps {
	onPress?: () => void;
	disabled?: boolean;
	buttonColor?: number;
	title: string;
	buttonStyles?: React.CSSProperties;
	textStyles?: React.CSSProperties;
	iconStyles?: React.CSSProperties;
}

export const Button = (props: IProps) => {
	const onPress = () => {
		props.onPress();
	};

	return (
		<ButtonData
			active={props.disabled}
			disabled={props.disabled}
			onClick={onPress}
			style={props.buttonStyles}
		>
			{props.title}
		</ButtonData>
	);
};

export const ButtonPlain = (props: IButtonProps) => {
	const onPress = () => {
		props.onPress();
	};
	return <button onClick={onPress}>{props.buttonText}</button>;
};

type ButtonProps = {
	active?: boolean;
	width?: string;
};

const ButtonData = styled.button<ButtonProps>`
	background-color: ${(props) => (props.disabled ? "#343468" : "#4848e6")};
	border-style: none;
	padding: 12px 35px;
	color: white;
	font-size: 13px;
	font-weight: 100;
	border-radius: 30px;
	margin: 20px 0 25px 0;
	width: ${(props) => (props.width != null ? props.width : "")};
`;
