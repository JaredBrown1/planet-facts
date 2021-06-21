import styled from "styled-components";

export const Container = styled.div`
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Container2 = styled.div`
	margin: 0 auto;
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

export const PlanetImage = styled.div`
	padding-top: 50px;
`;

export const PlanetDescription = styled.div`
	padding-left: 300px;
	margin-right: -50px;
	width: 400px;
	text-align: left;
	h1 {
		font-size: 80px;
		font-family: Antonio;
		font-weight: lighter;
	}
	p {
		font-size: 14px;
		font-family: Spartan;
		line-height: 25px;
	}
`;

export const Tabs = styled.div`
	display: flex;
	align-items: center;
	width: 350px;
	height: 48px;
	border: solid 1px #d8d8d8;
	margin-bottom: 10px;
	p {
		font-size: 12px;
		padding-left: 20px;
	}
	h3 {
		padding-left: 100px;
		font-family: Spartan;
		font-size: 12px;
	}
`;
