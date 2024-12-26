import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	const products = [
		{ id: 1, name: "Product A", Harga: "Rp 2.000.000", imgSrc: "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80" },
		{ id: 2, name: "Product B", Harga: "Rp 5.000.000", imgSrc: "https://images.unsplash.com/photo-1508423134147-addf71308178?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80" },
		{ id: 3, name: "Product C", Harga: "Rp 10.000.000", imgSrc: "https://images.unsplash.com/photo-1508423134147-addf71308178?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80" },
	];

	return (
		<div className="min-h-screen flex flex-col bg-slate-950">
			{" "}
			<nav
				id="header"
				className="w-full bg-gray-900 shadow-md fixed top-0 left-0 z-30 py-4"
			>
				<div className="container mx-auto flex items-center justify-center px-6">
					<a
						className="text-xl font-semibold text-white hover:text-gray-400"
						href="#"
					>
						Daftar Produk
					</a>
				</div>
			</nav>
			<div className="flex-grow min-h-screen flex flex-col bg-gray-800">
				<section className="bg-gray-800 py-12 pt-20">
					<div className="container ml-32 px-4 md:px-8 flex justify-center">
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
							{products.map((product) => (
								<div
									key={product.id}
									className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
								>
									<div className="w-full h-56 flex items-center justify-center">
										<img
											src={product.imgSrc}
											alt={product.name}
											className="object-contain max-h-full max-w-full"
										/>
									</div>
									<div className="p-6">
										<h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
										<p className="text-xl text-gray-600 mt-2">{product.Harga}</p>
										<Link
											to={`/product/${product.id}`}
											className="inline-block mt-4 px-6 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium transition duration-300"
										>
											View Details
										</Link>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Home;
