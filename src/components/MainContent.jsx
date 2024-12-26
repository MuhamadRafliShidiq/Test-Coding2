import React from "react";

const MainContent = () => {
	return (
		<main className="p-4">
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
				<div className="bg-slate-925 shadow-lg rounded-lg p-3 flex flex-col items-center">
					{/* Gambar 1 */}
					<a
						href="https://test-code-maqdis-academy.vercel.app/"
						target="_blank"
						rel="noopener noreferrer" // Menambahkan rel untuk keamanan
					>
						<img
							src="/src/assets/1.png"
							alt="Image 1"
							className="rounded-lg w-96 h-auto transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
						/>
					</a>
					<p className="mt-4 text-center text-white">Ini gambar menuju halaman Web Admin</p>
				</div>
				{/* Gambar 2 */}
				<div className="shadow-lg rounded-lg p-3 flex flex-col items-center">
					<a
						href=""
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src="/src/assets/1.png"
							alt="Image 1"
							className="rounded-lg w-96 h-auto transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
						/>
					</a>
					<p className="mt-4 text-center text-white">Ini gambar menuju halaman Web Dinamis</p>
				</div>
			</div>
		</main>
	);
};

export default MainContent;
