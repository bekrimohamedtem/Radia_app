"use client";
import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import HomeFilledIcon from "@mui/icons-material/HomeFilled";
import PhoneIcon from "@mui/icons-material/Phone";
import { useRouter } from "next/navigation";
import useQpStore from "@/components/useQpStore";
import useFormStore from "@/components/useFormStore";

const page = () => {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);
	const quantity = useQpStore((state) => state.quantity);
	const price = useQpStore((state) => state.price);
	const name = useFormStore((state) => state.name);
	const number = useFormStore((state) => state.number);
	const address = useFormStore((state) => state.address);

	// Fonction pour formater le numéro de téléphone
	const formatPhone = (phone: string) => {
		if (phone.startsWith("+213")) {
			return phone;
		}
		if (phone.startsWith("0")) {
			return "+213" + phone.substring(1);
		}
		return "+213" + phone;
	};

	// Fonction pour envoyer la commande au backend
	const createOrder = async () => {
		try {
			setIsLoading(true);
			
			const newOrder = {
				fullname: name,
				phone: formatPhone(number),
				gout: "Harvest Fruits",
				quantity: quantity,
				price: price,
				region: address,
			};

			const response = await fetch("http://127.0.0.1:8000/api/orders", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(newOrder),
			});

			const data = await response.json();
			console.log("Réponse du backend :", data);
			
			if (response.ok) {
				alert("Commande envoyée avec succès !");
				router.push("/success");
			} else {
				throw new Error(data.detail || "Erreur lors de l'envoi de la commande");
			}
		} catch (error) {
			console.error("Erreur :", error);
			alert("Erreur lors de l'envoi de la commande.");
		} finally {
			setIsLoading(false);
		}
	};

	const handleConfirm = () => {
		createOrder();
	};

	return (
		<div className="w-full h-full lg:max-w-6xl lg:mx-auto">
			<div className="flex flex-col items-center lg:mb-8">
				<img
					src="../../LOGO.svg"
					className="w-[80%] h-[100px] lg:w-[60%] lg:h-[120px]"
					alt="LogoPage"
				/>
				<p className="italianno-regular text-[#7B3F00] text-2xl lg:text-3xl">
					Natural Rhythm In Every Bite
				</p>
			</div>
			<div className=".container border w-[90%] mt-7 m-auto p-2 rounded-xl shadow lg:max-w-4xl lg:p-6 lg:mt-10">
				<h1 className="text-3xl font-semibold lg:text-4xl">
					Information de la <br /> Commande
				</h1>
				<div className="pb-15 lg:pb-8">
					<div className="flex mt-5 pb-3 lg:mt-8 lg:pb-6">
						{/* image */}
						<div className="rounded-2xl lg:h-80 overflow-hidden h-40 w-30 mr-3 ml-5 lg:w-64 lg:h-64 lg:mr-6 lg:ml-0">
							<img
								src="../../fruit.jpg"
								className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
								alt="Chocolate Dream"
							/>
						</div>
						{/* Infos */}
						<div className="infos lg:flex lg:flex-col lg:justify-center lg:gap-3">
							<div>
								<h2 className="font-semibold lg:text-lg">Product :</h2>
								<p className="bg-gray-300 pl-2 pr-15 rounded-md lg:pr-20 lg:py-1 lg:text-base">
									Harvest Fruits
								</p>
							</div>
							<div>
								<h2 className="font-semibold lg:text-lg">Quantity :</h2>
								<p className="bg-gray-300 pl-2 w-15 rounded-md lg:w-20 lg:py-1 lg:text-base">X {quantity}</p>
							</div>
							<div>
								<h2 className="font-semibold lg:text-lg">Price :</h2>
								<p className="bg-gray-300 pl-2 w-25 rounded-md lg:w-32 lg:py-1 lg:text-base">{price} DA</p>
							</div>
						</div>
					</div>
					<div className="flex bg-gray-300 ml-4 w-40 rounded-md m-1 pl-2 py-0.5 lg:w-auto lg:min-w-[300px] lg:py-2 lg:text-base lg:ml-0">
						<PersonIcon className="lg:mr-2" />
						<p>: {name}</p>
					</div>
					<div className="flex bg-gray-300 ml-4 w-40 rounded-md m-1 pl-2 py-0.5 lg:w-auto lg:min-w-[300px] lg:py-2 lg:text-base lg:ml-0">
						<PhoneIcon className="lg:mr-2" />
						<p>: {number}</p>
					</div>
					<div className="flex bg-gray-300 ml-4 w-40 rounded-md m-1 pl-2 py-0.5 lg:w-auto lg:min-w-[300px] lg:py-2 lg:text-base lg:ml-0">
						<HomeFilledIcon className="lg:mr-2" />
						<p>: {address}</p>
					</div>
				</div>
			</div>
			<button
				className="w-[60%] p-2 m-auto block mt-7 border rounded-md hover:bg-[#7B3F0078] cursor-pointer bg-[#7B3F00]/[0.5] lg:w-80 lg:py-3 lg:text-lg lg:mt-10 disabled:opacity-50 disabled:cursor-not-allowed"
				onClick={handleConfirm}
				disabled={isLoading}
			>
				{isLoading ? "Envoi..." : "Confirm"}
			</button>
		</div>
	);
};

export default page;
