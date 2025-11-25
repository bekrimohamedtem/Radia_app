"use client";
import { useRouter } from "next/navigation";
import useFormStore from "@/components/useFormStore"; // adapte le chemin si nécessaire
import { useState } from "react";

const Page = () => {
	const router = useRouter();

	const name = useFormStore((state) => state.name);
	const number = useFormStore((state) => state.number);
	const address = useFormStore((state) => state.address);

	const setName = useFormStore((state) => state.setName);
	const setNumber = useFormStore((state) => state.setNumber);
	const setAddress = useFormStore((state) => state.setAddress);
	const validate = useFormStore((state) => state.validate);

	const [errors, setErrors] = useState([]);

	const handleSubmit = () => {
		const validationErrors = validate();
		if (validationErrors.length > 0) {
			setErrors(validationErrors);
			return;
		}

		// Tout est OK, redirection vers la page de confirmation
		router.push("/goldenharvest/form/confirmation");
	};

	return (
		<div className="w-full h-full">
			<div className="flex flex-col items-center">
				<img src="../LOGO.svg" className="w-[80%] h-[100px]" alt="LogoPage" />
				<p className="italianno-regular mb-5 text-[#7B3F00] text-2xl">
					Natural Rhythm In Every Bite
				</p>
			</div>

			<div className="w-fit ml-7 md:mx-auto">
				<h1 className="text-3xl font-semibold mb-5">Information</h1>

				{/* Affichage des erreurs */}
				{errors.length > 0 && (
					<div className="mb-3 text-red-600">
						{errors.map((err, i) => (
							<p key={i}>{err}</p>
						))}
					</div>
				)}

				{/* Champs du formulaire */}
				<input
					type="text"
					placeholder="Enter your name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					className="block bg-gray-300 py-1 focus:outline-none border rounded-md mb-3 pr-25 pl-3 text-black"
				/>

				<input
					type="text"
					placeholder="Enter your number"
					value={number}
					onChange={(e) => setNumber(e.target.value)}
					className="block bg-gray-300 py-1 focus:outline-none border rounded-md mb-3 pr-25 pl-3 text-black"
				/>

				<input
					type="text"
					placeholder="Enter your address"
					value={address}
					onChange={(e) => setAddress(e.target.value)}
					className="block bg-gray-300 py-1 focus:outline-none border rounded-md mb-3 pr-25 pl-3 text-black"
				/>

				<button
					className="rounded-md hover:bg-[#7b40009c] cursor-pointer border py-0.5 px-10 bg-[#7B3F0078]"
					onClick={handleSubmit}
				>
					Valid
				</button>
			</div>
		</div>
	);
};

export default Page;
