import React from "react";
import Navbar from "./Navbar.jsx"
import Footer from "./Footer.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Cards from "./Cards.jsx";
//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<Jumbotron/>
			<Cards/>
			<Footer />
		</div>
	);
};

export default Home;