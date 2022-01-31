import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import DisplayPostUI from "../helpers/DisplayPostUI";
import styled from "styled-components";
import Pages from "./Pages";

function PaginatedItems(props) {
	const items = props.items;
	const itemsPerPage = props.itemsPerPage;
	const [currentItems, setCurrentItems] = useState(null);
	const [pageCount, setPageCount] = useState(0);
	const [itemOffset, setItemOffset] = useState(0);

	useEffect(() => {
		const endOffset = itemOffset + itemsPerPage;
		console.log(`Loading items from ${itemOffset} to ${endOffset}`);
		setCurrentItems(items.slice(itemOffset, endOffset));
		setPageCount(Math.ceil(items.length / itemsPerPage));
	}, [itemOffset, itemsPerPage]);

	const handlePageClick = (event) => {
		const newOffset = (event.selected * itemsPerPage) % items.length;
		console.log(
			`User requested page number ${event.selected}, which is offset ${newOffset}`
		);
		setItemOffset(newOffset);
	};

	return (
		<>
			<DisplayPostUI currentItems={currentItems} />
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
