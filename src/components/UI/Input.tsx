import { useState } from "react";
import styled from "styled-components";

interface IInputprops {
	labelName: string;
	defaultValue: string;
	onsearchTermChangeHandler: (currentValue: string) => void;
}

export const Input = (props: IInputprops) => {
	const [visited, setVisited] = useState(false);

	const onChangeHandler = (event: any) => {
		props.onsearchTermChangeHandler(event.target.value);
	};

	const onFocusHandler = () => {
		setVisited(true);
	};

	return (
		<div>
			<Label>
				<p> {props.labelName}</p>
				<InputStyle
					onChange={onChangeHandler}
					type="text"
					value={
						!visited && props.defaultValue === ""
							? "Search Text.."
							: props.defaultValue
					}
					onFocus={onFocusHandler}
				/>
			</Label>
		</div>
	);
};

interface IInputOptionProps {
	labelName: string;
	defaultLabel: string | number;
	options: string[] | number[];
	onSelectChangeHandler: (currentValue: string) => void;
}

type SelectStyleProps = {
	width?: string;
	shadow?: boolean;
};

export const InputOptions = (props: IInputOptionProps) => {
	const optionsData = props.options.map((option) => (
		<option key={option} value={option}>
			{option}
		</option>
	));

	const onSelectChangeHandler = (event: any) => {
		props.onSelectChangeHandler(event.target.value);
	};

	return (
		<div>
			<Label htmlFor={props.labelName}>
				<p> {props.labelName}</p>
				<SelectStyle
					onChange={onSelectChangeHandler}
					name={props.labelName}
					value={props.defaultLabel}
					width="199px"
				>
					{optionsData === null ? (
						<option value="nil">nil</option>
					) : (
						optionsData
					)}
				</SelectStyle>
			</Label>
		</div>
	);
};

export const InputOptionsWide = (props: IInputOptionProps) => {
	const optionsData = props.options.map((option) => (
		<option key={option} value={option}>
			{option}
		</option>
	));

	const onSelectChangeHandler = (event: any) => {
		props.onSelectChangeHandler(event.target.value);
	};

	return (
		<div>
			<Label htmlFor={props.labelName}>
				<p> {props.labelName}</p>
				<SelectStyle
					width="96.5%"
					shadow={true}
					onChange={onSelectChangeHandler}
					name={props.labelName}
					value={props.defaultLabel}
				>
					{optionsData === null ? (
						<option value="nil">nil</option>
					) : (
						optionsData
					)}
				</SelectStyle>
			</Label>
		</div>
	);
};

const Label = styled.label`
	color: black;
	& p {
		padding-left: 12px;
	}
`;

const InputStyle = styled.input`
	border: none;
	padding: 11px;
	background: white;
	margin: 8px 12px;
	box-shadow: 1px 1px 3px -5px rgba(0, 0, 0, 0.75);
	color: #9e9797;
`;

const SelectStyle = styled.select<SelectStyleProps>`
	color: #9e9797;
	border: none;
	background: white;
	padding: 10px;
	margin: 8px 12px;
	min-width: ${(props) => (props.width !== null ? props.width : "199px")};
	box-shadow: ${(props) =>
		props.shadow !== null ? "1px 1px 5px -1px rgba(0, 0, 0, 0.75)" : "none"};
`;
