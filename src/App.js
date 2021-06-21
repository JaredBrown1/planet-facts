import React from "react";

import NavBar from "./components/nav-bar/navBar";
import Planet from "./components/planets/planets";

import "./index.css";

const App = () => {
	return (
		<div className="app">
			<NavBar />
			<Planet />
		</div>
	);
};

export default App;
