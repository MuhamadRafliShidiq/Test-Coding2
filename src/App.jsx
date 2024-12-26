import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";

function App() {
	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={<Home />} // Memastikan Home dibungkus dengan tag <>
				/>
				<Route
					path="/product/:id"
					element={<ProductDetail />} // Memastikan ProductDetail dibungkus dengan tag <>
				/>
			</Routes>
		</Router>
	);
}

export default App;
