import React from "react";

import {
	Container,
	Container2,
	PlanetDescription,
	Tabs,
	PlanetStats,
} from "./planets.styles";

const Planet = ({ props, match }) => {
	const paramItemId = match.params.id;

	const planetResults = props.filter(
		(planet) => planet.id === Number(paramItemId)
	);

	const planet = planetResults[0];
	console.log("Planet: ", planet);

	return (
		<div>
			<Container>
				<div>
					<img src={planet.images.planet} alt="planet" />
				</div>
				<PlanetDescription>
					<h1>{planet.name}</h1>
					<p>{planet.overview.content}</p>
					<p>source</p>
					<div>
						<Tabs>
							<p>01</p>
							<h3>OVERVIEW</h3>
						</Tabs>
						<Tabs>
							<p>02</p>
							<h3>INTERNAL STRUCTURE</h3>
						</Tabs>
						<Tabs>
							<p>01</p>
							<h3>SURFACE GEOLOGY</h3>
						</Tabs>
					</div>
				</PlanetDescription>
			</Container>

			<Container2>
				<PlanetStats>
					<p>ROTATION TIME</p>
					<h1>{planet.rotation}</h1>
				</PlanetStats>
				<PlanetStats>
					<p>REVOLUTION TIME</p>
					<h1>{planet.revolution}</h1>
				</PlanetStats>
				<PlanetStats>
					<p>RADIUS</p>
					<h1>{planet.radius}</h1>
				</PlanetStats>
				<PlanetStats>
					<p>AVERAGE TEMP</p>
					<h1>{planet.temperature}</h1>
				</PlanetStats>
			</Container2>
		</div>
	);
};

export default Planet;
