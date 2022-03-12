import styled from "styled-components";

interface IButtonProps {
	buttonText: string;
	disabled?: boolean;
	width?: string;
	onSubmitHandler: () => void;
}

export const Button = (props: IButtonProps) => {
	const OnSubmitHandler = () => {
		props.onSubmitHandler();
	};

	return (
		<ButtonData
			width={props.width}
			active={props.disabled}
			disabled={props.disabled}
			onClick={OnSubmitHandler}
		>
			{props.buttonText}
		</ButtonData>
	);
};

export const ButtonPlain = (props: IButtonProps) => {
	const OnSubmitHandler = () => {
		props.onSubmitHandler();
	};

	return <button onClick={OnSubmitHandler}>{props.buttonText}</button>;
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
