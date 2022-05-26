import styled from "styled-components";

const EmptySection = (props) => {
	return <Container height={props.height}></Container>;
};

const Container = styled.div`
	height: ${(props) => props.height};
	width: 100%;
`;

export default EmptySection;
