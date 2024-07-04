import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./navbar.jsx";
import Container from "./container..jsx";
import Footer from "./footer.jsx"
//create your first component
const Home = () => {
	return (
		<div className="app">
			<Navbar />
			<Container />
			<Footer />
		</div>

	);
};

export default Home;
