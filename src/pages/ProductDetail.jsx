import React from "react";
import { useParams, Link } from "react-router-dom";

const ProductDetail = () => {
	// Mengambil id produk dari URL
	const { id } = useParams();

	// Data produk yang disimpan langsung
	const products = [
		{
			id: 1,
			name: "Product A",
			Harga: "Rp 2.000.000",
			imgSrc: "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80",
		},
		{
			id: 2,
			name: "Product B",
			Harga: "Rp 5.000.000",
			imgSrc: "https://images.unsplash.com/photo-1508423134147-addf71308178?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80",
		},
		{
			id: 3,
			name: "Product C",
			Harga: "Rp 10.000.000",
			imgSrc: "https://images.unsplash.com/photo-1508423134147-addf71308178?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80",
		},
	];

	// Mencari produk berdasarkan ID yang diambil dari URL
	const product = products.find((prod) => prod.id === parseInt(id));

	// Jika produk tidak ditemukan, tampilkan pesan error
	if (!product) {
		return <div>Produk tidak ditemukan!</div>;
	}

	return (
		<div className="container mx-auto py-16 px-6">
			<nav className="mb-6">
				<Link
					to="/"
					className="inline-block px-6 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium transition duration-300"
				>
					Kembali ke Daftar Produk
				</Link>
			</nav>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
				<div className="flex justify-center">
					<img
						src={product.imgSrc}
						alt={product.name}
						className="object-contain max-h-96 max-w-full"
					/>
				</div>

				<div>
					<h1 className="text-3xl font-semibold text-gray-800">{product.name}</h1>
					<p className="text-xl text-gray-600 mt-2">{product.Harga}</p>
					<p className="mt-4 text-gray-700">Deskripsi produk dapat ditambahkan di sini. Misalnya, informasi lebih lanjut mengenai spesifikasi produk atau fitur utama dari produk tersebut.</p>
				</div>
			</div>
		</div>
	);
};

export default ProductDetail;
