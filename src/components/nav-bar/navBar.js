import React from "react";

import { NavContainer, NavLinks } from "./navBar.styles";

const NavBar = () => {
	return (
		<NavContainer>
			<div>
				<h1>THE PLANETS</h1>
			</div>

			<div>
				<a href="/mercury">MERCURY</a>
				<a href="/venus">VENUS</a>
				<a href="/earth">EARTH</a>
				<a href="/mars">MARS</a>
				<a href="/jupiter">JUPITER</a>
				<a href="/saturn">SATURN</a>
				<a href="/uranus">URANUS</a>
				<a href="/neptune">NEPTUNE</a>
			</div>
		</NavContainer>
	);
};

export default NavBar;
