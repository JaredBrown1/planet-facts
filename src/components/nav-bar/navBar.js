import React from "react";

import { NavContainer } from "./navBar.styles";

const NavBar = () => {
	return (
		<NavContainer>
			<div>
				<h1>THE PLANETS</h1>
			</div>

			<div>
				<a href="/0">MERCURY</a>
				<a href="/1">VENUS</a>
				<a href="/2">EARTH</a>
				<a href="/3">MARS</a>
				<a href="/4">JUPITER</a>
				<a href="/5">SATURN</a>
				<a href="/6">URANUS</a>
				<a href="/7">NEPTUNE</a>
			</div>
		</NavContainer>
	);
};

export default NavBar;
