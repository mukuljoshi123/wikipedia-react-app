import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DisplayPostUI from "../helpers/DisplayPostUI";
import Pages from "./Pages";

function PaginatedItems(props) {
	const items = props.items;
	const itemsPerPage = props.itemsPerPage;
	const [currentItems, setCurrentItems] = useState(null);
	const [pageCount, setPageCount] = useState(0);
	const [itemOffset, setItemOffset] = useState(0);

	useEffect(() => {
		const endOffset = itemOffset + itemsPerPage;
		setCurrentItems(items.slice(itemOffset, endOffset));
		setPageCount(Math.ceil(items.length / itemsPerPage));
	}, [itemOffset, itemsPerPage, items]);

	const handlePageClick = (event) => {
		const newOffset = (event.selected * itemsPerPage) % items.length;

		setItemOffset(newOffset);
	};

	return (
		<>
			<DisplayPostUI currentItems={currentItems} key={Math.random} />
			<Container>
				<Pages
					onPageChange={handlePageClick}
					pageRangeDisplayed={5}
					pageCount={pageCount}
				/>
			</Container>
		</>
	);
}

const Container = styled.div`
	margin: 30px auto;
	text-align: center;
`;

export default PaginatedItems;
