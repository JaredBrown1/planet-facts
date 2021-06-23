import React from "react";

import {
	Container,
	Container2,
	PlanetDescription,
	Tabs,
	PlanetStats,
} from "./planets.styles";

const Planet = (props) => {
	return (
		<div>
			<Container>
				<div>
					<img src={props.images} alt="planet" />
				</div>
				<PlanetDescription>
					<h1>{props.name}</h1>
					<p>{props.overview}</p>
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
					<h1>{props.rotation}</h1>
				</PlanetStats>
				<PlanetStats>
					<p>REVOLUTION TIME</p>
					<h1>{props.revolution}</h1>
				</PlanetStats>
				<PlanetStats>
					<p>RADIUS</p>
					<h1>{props.radius}</h1>
				</PlanetStats>
				<PlanetStats>
					<p>AVERAGE TEMP</p>
					<h1>{props.temperature}</h1>
				</PlanetStats>
			</Container2>
		</div>
	);
};

export default Planet;
