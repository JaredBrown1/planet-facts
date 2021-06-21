import React from "react";

import {
	Container,
	Container2,
	PlanetDescription,
	PlanetImage,
} from "./planets.styles";

import Image from "../../images/planet-mercury.svg";

const Planet = () => {
	return (
		<div>
			<Container>
				<PlanetImage>
					<img src={Image} alt="mercury" />
				</PlanetImage>
				<PlanetDescription>
					<h1>MERCURY</h1>
					<p>
						{" "}
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi vel
						non distinctio in sit maxime minus. Iure sapiente incidunt fugiat
						sed modi accusamus magnam ut rem nam quaerat? Corporis, atque? Lorem
						ipsum dolor sit amet, consectetur adipisicing elit. Nisi vel non
						distinctio in sit maxime minus. Iure sapiente incidunt fugiat sed
						modi accusamus magnam ut rem nam quaerat? Corporis, atque?
					</p>
					<p>source</p>
					<div>overview</div>
					<div>interal structure</div>
					<div>surface geology</div>
				</PlanetDescription>
			</Container>

			<Container2>
				<div>
					<p>rotation time</p>
					<h1>58.6 days</h1>
				</div>
				<div>
					<p>rotation time</p>
					<h1>58.6 days</h1>
				</div>
				<div>
					<p>rotation time</p>
					<h1>58.6 days</h1>
				</div>
				<div>
					<p>rotation time</p>
					<h1>58.6 days</h1>
				</div>
			</Container2>
		</div>
	);
};

export default Planet;
