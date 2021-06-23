import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./components/nav-bar/navBar";
import Planet from "./components/planets/planets";

import "./index.css";

import data from "./data/data.js";

const App = () => {
	const [planets, setPlanets] = useState(data);

	return (
		<Router>
			<NavBar />
			<Route
				path="/:id"
				render={(routeProps) => <Planet {...routeProps} props={planets} />}
			/>
		</Router>
	);
};

export default App;
