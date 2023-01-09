import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { ItemDescription } from "./views/itemDescription";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {

	const [favorites, setFavorites] = useState([])

	const addFavorites = (name) => {
		if(favorites.includes(name)){
			return
		} else {
		setFavorites([...favorites, name])
		}
	}

	const deleteFavorites = (id) => {
		setFavorites(favorites.filter((favorite, i) => i !== id))
	}

	

	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar favorites={favorites} handleFavorites={deleteFavorites}/>
					<Routes>
						<Route path="/" element={<Home handleFavorites={addFavorites}/>} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="/people/:id" element={<ItemDescription/>}/>
						
						<Route path="/people/:id" element={<ItemDescription/>}/>
						<Route path="/planets/:id" element={<ItemDescription/>}/>
						<Route path="/vehicles/:id" element={<ItemDescription/>}/>

						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
