import { Fragment, useState } from "react";
import styled from "styled-components";
import { array } from "yup/lib/locale";

const Pages = (props: any) => {
	const [activePage, setActivePage] = useState(0);

	const pages: any[] = [];
	const onButtonClickHandler = (item: number) => {
		setActivePage(item);
		props.onPageChange({ selected: item });
	};

	let i = 0;
	for (i = 1; i <= props.pageCount; i++) {
		pages.push(
			<Button
				activePage={activePage == i ? true : false}
				onClick={onButtonClickHandler.bind(this, i, i)}
			>
				{i}
			</Button>
		);
	}

	return <Fragment>{pages}</Fragment>;
};

const Container = styled.div``;

type IButtonProps = {
	activePage: boolean;
};

const Button = styled.button<IButtonProps>`
	padding: 9px 15px;
	border: none;
	background-color: #4848e6;
	border-radius: 50%;
	margin: 3px;
	color: white;
	&:visited,
	&:hover,
	&:active {
		background-color: ${(props) => (props.activePage ? "#9e9999" : "#4848e6")};
		color: ${(props) => (props.activePage ? "#4848e6" : "white")};
	}
`;

export default Pages;
