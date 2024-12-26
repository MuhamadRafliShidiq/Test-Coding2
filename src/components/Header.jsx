import React from "react";
import { RiYoutubeLine, RiInstagramLine, RiLinkedinBoxLine, RiWhatsappLine, RiTiktokLine, RiGithubLine } from "react-icons/ri";

const Header = () => {
	return (
		<header className="flex items-center justify-between px-8 py-2 bg-slate-950 text-white">
			<div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8 w-full">
				{/* Logo */}
				<div className="flex justify-between items-center w-full lg:w-auto">
					<a href={""}>
						<img
							src="/src/assets/1.svg"
							width={270}
							height={48}
							alt="Logo"
							className="ml-0 lg:ml-24"
							priority={true}
						/>
					</a>
				</div>

				{/* Social Icons */}
				<div className="flex justify-center lg:justify-end items-center gap-x-5 text-lg w-full lg:w-auto mt-4 lg:mt-0">
					<a
						href={"https://youtube.com/@rafli_officialchannel?si=4L7cKM3L73Fi_Jvv"}
						className="hover:text-accent transition-all duration-300"
						target="_blank"
						rel="noopener noreferrer"
					>
						<RiYoutubeLine />
					</a>
					<a
						href={"https://www.tiktok.com/@muhamad_rafli_shidiq19?_t=8sGYbuB3w9d&_r=1"}
						className="hover:text-accent transition-all duration-300"
						target="_blank"
						rel="noopener noreferrer"
					>
						<RiTiktokLine />
					</a>
					<a
						href={"https://www.instagram.com/muhamadraflishidiq/profilecard/?igsh=ZjlnYXhndWdoMDg2"}
						className="hover:text-accent transition-all duration-300"
						target="_blank"
						rel="noopener noreferrer"
					>
						<RiInstagramLine />
					</a>
					<a
						href={"https://www.linkedin.com/in/muhamad-rafli-shidiq-731114269?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}
						className="hover:text-accent transition-all duration-300"
						target="_blank"
						rel="noopener noreferrer"
					>
						<RiLinkedinBoxLine />
					</a>
					<a
						href={"https://github.com/MuhamadRafliShidiq"}
						className="hover:text-accent transition-all duration-300"
						target="_blank"
						rel="noopener noreferrer"
					>
						<RiGithubLine />
					</a>
					<a
						href={"https://wa.me/6282134716388"}
						className="hover:text-accent transition-all duration-300"
						target="_blank"
						rel="noopener noreferrer"
					>
						<RiWhatsappLine />
					</a>
				</div>
			</div>
		</header>
	);
};

export default Header;
