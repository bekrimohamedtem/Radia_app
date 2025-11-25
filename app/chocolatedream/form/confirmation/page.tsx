"use client";
import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import HomeFilledIcon from "@mui/icons-material/HomeFilled";
import PhoneIcon from "@mui/icons-material/Phone";
import { useRouter } from "next/navigation";
import useQpStore from "../../../../components/useQpStore";
import useFormStore from "@/components/useFormStore";

const page = () => {
	const quantity = useQpStore((state) => state.quantity);
	const price = useQpStore((state) => state.price);
	const router = useRouter();

	const name = useFormStore((state) => state.name);
	const number = useFormStore((state) => state.number);
	const address = useFormStore((state) => state.address);
	return (
		<div className="w-full h-full">
			<div className="flex flex-col items-center">
				<img
					src="../../LOGO.svg"
					className="w-[80%] h-[100px]"
					alt="LogoPage"
				/>
				<p className="italianno-regular text-[#7B3F00] text-2xl">
					Natural Rhythm In Every Bite
				</p>
			</div>
			<div className=".container border w-[90%] mt-7 m-auto p-2 rounded-xl shadow">
				<h1 className="text-3xl font-semibold">
					Information de la <br /> Commande
				</h1>
				<div className="pb-15">
					<div className="flex mt-5 pb-3">
						{/* image */}
						<div className="rounded-2xl lg:h-80 overflow-hidden h-40 w-30 mr-3 ml-5 ">
							<img
								src="../../chocolat.jpg"
								className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
								alt="Chocolate Dream"
							/>
						</div>
						{/* Infos */}
						<div className="infos">
							<h2 className="font-semibold">Product :</h2>
							<p className="bg-gray-300 pl-2 pr-15 rounded-md">
								Chocolate Dream
							</p>
							<h2 className="font-semibold">Quantity :</h2>
							<p className="bg-gray-300 pl-2 w-15 rounded-md">X {quantity}</p>

							<h2 className="font-semibold">Price :</h2>
							<p className="bg-gray-300 pl-2 w-25 rounded-md">{price} DA</p>
						</div>
					</div>
					<div className="flex bg-gray-300 ml-4 w-40 rounded-md m-1 pl-2 py-0.5">
						<PersonIcon />
						<p>: {name}</p>
					</div>
					<div className="flex bg-gray-300 ml-4 w-40 rounded-md m-1 pl-2 py-0.5">
						<PhoneIcon />
						<p>: {number}</p>
					</div>
					<div className="flex bg-gray-300 ml-4 w-40 rounded-md m-1 pl-2 py-0.5">
						<HomeFilledIcon />
						<p>: {address}</p>
					</div>
				</div>
			</div>
			<button
				className="w-[60%] p-2 m-auto block mt-7 border rounded-md hover:bg-[#7B3F0078] cursor-pointer  bg-[#7B3F00]/[0.5]"
				onClick={() => router.push("/success")}
			>
				Confirm
			</button>
		</div>
	);
};

export default page;
