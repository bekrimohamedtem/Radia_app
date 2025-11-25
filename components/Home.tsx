"use client";
import "@/app/my.css";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";
import { FaTiktok } from "react-icons/fa6";
const Home = () => {
	return (
		<div className=".container w-screen h-full bg-[#CEC1A3]">
			<div className="flex flex-col items-center">
				<img src="../LOGO.svg" className="w-[80%] h-[100px]" alt="LogoPage" />
				<p className="italianno-regular text-[#7B3F00] text-2xl">
					Natural Rhythm In Every Bite
				</p>
			</div>
			<div className="bg-gray-300 w-full flex items-center justify-center h-40 mb-15 mt-4">
				<p className="text-center">Video Place</p>
			</div>
			<div className="products grid grid-cols-2 gap-4 w-full justify-items-center">
				<Link  href={"/velvethoney"} className="h-62  lg:h-92 w-[70%] rounded-2xl shadow-md cursor-pointer">
					{/* Image container */}
					<div className="rounded-t-2xl lg:h-80 overflow-hidden h-50 w-full">
						<img
							src="../honey.jpg"
							className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
							alt="Chocolate Dream"
						/>
					</div>

					{/* Caption */}
					<div className="bg-[#FFC30B]/[0.21] h-12 rounded-b-2xl flex items-center justify-center">
						<p className="font-semibold text-white">Velvet Gold</p>
					</div>
				</Link>
			<Link href={"/chocolatedream"} className="h-62  lg:h-92 w-[70%] rounded-2xl shadow-md cursor-pointer">
					{/* Image container */}
					<div className="rounded-t-2xl lg:h-80 overflow-hidden h-50 w-full">
						<img
							src="../Chocolat.jpg"
							className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
							alt="Chocolate Dream"
						/>
					</div>

					{/* Caption */}
					<div className="bg-[#7B3F00]/[0.55] h-12 rounded-b-2xl flex items-center justify-center">
						<p className="font-semibold text-white">Chocolate Dream</p>
					</div>
				</Link>
				<Link  href={"/harvestfruits"} className="h-62 lg:h-92  w-[70%] rounded-2xl shadow-md cursor-pointer">
					{/* Image container */}
					<div className="rounded-t-2xl lg:h-80 overflow-hidden h-50 w-full">
						<img
							src="../fruit.jpg"
							className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
							alt="Chocolate Dream"
						/>
					</div>

					{/* Caption */}
					<div className="bg-[#9F3E43]/[0.52] h-12 rounded-b-2xl flex items-center justify-center">
						<p className="font-semibold text-white">Harvest Fruits</p>
					</div>
				</Link>
				<Link href={"/goldenharvest"} className="h-62  lg:h-92 w-[70%] rounded-2xl shadow-md cursor-pointer">
					{/* Image container */}
					<div className="rounded-t-2xl lg:h-80 overflow-hidden h-50 w-full">
						<img
							src="../noix.jpg"
							className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
							alt="Chocolate Dream"
						/>
					</div>

					{/* Caption */}
					<div className="bg-[#C97D65]/[0.69] h-12 rounded-b-2xl flex items-center justify-center">
						<p className="font-semibold text-white">Golden Harvest</p>
					</div>
				</Link>
			</div>
			<hr className="border-t-2 border-black my-4 mx-20" />
			<div className="mt-5 flex flex-col gap-5 items-center lg:flex-row md:flex-row md:justify-around lg:justify-around">
				<div className="text-center">
					<h1 className="text-2xl font-semibold underline underline-offset-4">
						Contact :
					</h1>
					<div>
						<div className="tel flex items-center justify-center gap-2 pb-1 mt-2">
							<CallIcon />
							<p className="font-semibold">: 0540810798</p>
						</div>
						<div className="tel flex items-center justify-center gap-2 pb-1">
							<CallIcon />
							<p className="font-semibold">: 0673545713</p>
						</div>
						<div className="tel flex items-center justify-center gap-2 pb-1">
							<EmailIcon />
							<p className="font-semibold">: rhyminolahouse@gmail.com</p>
						</div>
					</div>
				</div>

				<div className="text-center">
					<h1 className="text-2xl font-semibold underline underline-offset-4 mb-2">
						Social Media :
					</h1>
					<div className="flex items-center justify-center gap-2 cursor-pointer">
						<InstagramIcon />
						<p className="font-semibold">: account</p>
					</div>
					<div className="flex items-center justify-center gap-2 cursor-pointer">
						<FacebookIcon />
						<p className="font-semibold">: account</p>
					</div>
					<div className="flex items-center justify-center gap-2 cursor-pointer">
						<FaTiktok />
						<p className="font-semibold">: account</p>
					</div>
				</div>
			</div>
			<p className="font-medium text-center pb-5 pt-5 ">
				© 2025 Rhyminola House
			</p>
		</div>
	);
};

export default Home;
