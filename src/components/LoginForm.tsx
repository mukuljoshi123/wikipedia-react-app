import styled from "styled-components";
import Card from "./UI/Card";
import User from "../assets/images/user1.png";
import Key from "../assets/images/key.png";
import AppIcon from "../assets/images/padlock.png";
import { Button } from "./atoms/button";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const LoginForm = () => {
	const history = useHistory();
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");

	const [firstVisitUserName, setFirstVisitUserName] = useState(false);
	const [firstVisitPassword, setFirstVisitPassword] = useState(false);

	const [userNameError, setUserNameError] = useState(false);
	const [passwordError, setPasswordError] = useState(false);

	const onUserNameChangeHandler = (event: any) => {
		setUserName(event.target.value);
	};

	const onFocusHandlerUserName = () => {
		setFirstVisitUserName(true);
	};

	const onPasswordChangeHandler = (event: any) => {
		setPassword(event.target.value);
	};

	const onFocusHandlerPassword = () => {
		setFirstVisitPassword(true);
	};

	const onUserNameBlurHandler = () => {
		if (userName === "" || userName.length < 5) {
			setUserNameError(true);
		} else {
			setUserNameError(false);
		}
	};

	const onPasswordBlurHandler = () => {
		if (password === "" || password.length < 5) {
			setPasswordError(true);
		} else {
			setPasswordError(false);
		}
	};

	const onSubmitHandler = (event: any) => {
		event.preventDefault();
		history.push(`/home`);
	};

	return (
		<Card width="25%">
			<Container>
				<HeaderImage src={AppIcon} alt="app-icon" />
				<h3>Login</h3>
				<form onSubmit={onSubmitHandler}>
					<Input
						icon={User}
						name="username"
						error={userNameError}
						type="text"
						value={
							userName === "" && !firstVisitUserName ? "username" : userName
						}
						onFocus={onFocusHandlerUserName}
						onChange={onUserNameChangeHandler}
						onBlur={onUserNameBlurHandler}
					/>
					{userNameError && (
						<Error>Username must be at least 5 characters.</Error>
					)}
					<Input
						icon={Key}
						error={passwordError}
						name="password"
						type="text"
						onFocus={onFocusHandlerPassword}
						onChange={onPasswordChangeHandler}
						onBlur={onPasswordBlurHandler}
						value={
							password === "" && !firstVisitPassword ? "password" : password
						}
					/>
					{passwordError && (
						<Error>Password must be at least 6 characters.</Error>
					)}
					<Button
						onPress={() => {}}
						disabled={
							!firstVisitUserName ||
							!firstVisitPassword ||
							userNameError ||
							passwordError
						}
						title="Submit"
					/>
				</form>
			</Container>
		</Card>
	);
};

const HeaderImage = styled.img`
	width: 70px;
	padding: 2rem 2rem 1rem 2rem;
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	& form {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;

		&[type="text"] {
			color: red;
		}
	}

	& h3 {
		padding: 5px;
		font-weight: 300;
		font-size: 24px;
	}
`;

type InputProps = {
	icon?: string;
	error?: boolean;
};

const Input = styled.input<InputProps>`
	width: 70%;
	padding: 13px;
	margin: 13px;
	border-style: none;
	border-radius: 3px;
	box-shadow: 0.5px 0.5px 3px 0.5px rgba(0, 0, 0, 0.25);
	background: url(${(props) => props.icon}) no-repeat left 10px center;
	background-size: 15px 15px;
	border-bottom: ${(props) => (props.error ? "3px solid red" : "")};

	&[type="text"] {
		text-align: left;
		padding-left: 40px;
	}
`;

const Error = styled.p`
	width: 80%;
	text-align: left;
	padding: 0;
	color: #8a8282;
`;

export default LoginForm;
