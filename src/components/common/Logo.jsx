import React from "react";
import styled from "styled-components";

export default function Logo() {
	return <StyledText>Timeline&reg;</StyledText>;
}

const StyledText = styled.h1`
	color: black;
	font-weight: 700;
	font-size: 4em;
	margin: 0;
	padding: 0;
`;
