import React from "react";
import { Link } from "react-router-dom";

import { NavContainer } from "./navBar.styles";

const NavBar = () => {
	return (
		<NavContainer>
			<div>
				<h1>THE PLANETS</h1>
			</div>

			<div>
				<Link to="/0">MERCURY</Link>
				<Link to="/1">VENUS</Link>
				<Link to="/2">EARTH</Link>
				<Link to="/3">MARS</Link>
				<Link to="/4">JUPITER</Link>
				<Link to="/5">SATURN</Link>
				<Link to="/6">URANUS</Link>
				<Link to="/7">NEPTUNE</Link>
			</div>
		</NavContainer>
	);
};

export default NavBar;
