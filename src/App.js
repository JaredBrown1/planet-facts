import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";

import NavBar from "./components/nav-bar/navBar";
import Planet from "./components/planets/planets";

import "./index.css";

import { Data } from "./data/data.js";
import { NavbarBrand } from "react-bootstrap";
// console.log(Data);
const planetNames = [
	"mercury",
	"venus",
	"earth",
	"mars",
	"jupiter",
	"saturn",
	"uranus",
	"neptune",
	"pluto",
];

const App = () => {
	return (
		<Router>
			<NavBar />
			<Switch>
				<Route path="/" exact>
					<Redirect to="/earth" />
				</Route>
				<Route
					path={`/:planetName(${planetNames.join("|")})`}
					exact
					children={<Planet />}
				/>
			</Switch>
		</Router>
	);
};

export default App;

// {Data.map((planets, index) => {
// 	console.log(planets);
// 	return (
// 		<Planet
// 			key={index}
// 			images={planets.images.planet}
// 			name={planets.name}
// 			overview={planets.overview.content}
// 			rotation={planets.rotation}
// 			revolution={planets.revolution}
// 			radius={planets.radius}
// 			temperature={planets.temperature}
// 		/>
// 	);
// })}
