import styled from "styled-components";

const Card = (props) => {
	return <Container width={props.width}>{props.children}</Container>;
};

const Container = styled.div`
	background: #ffffff;
	margin: 0 auto;
	max-width: ${(props) => props.width};
	border-radius: 5px;
	box-shadow: 3px 3px 31px -5px rgba(0, 0, 0, 0.75);
`;

export default Card;
