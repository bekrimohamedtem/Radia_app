"use client";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import "@/app/my.css";
import { useRouter } from "next/navigation";
import { BsBoxSeam } from "react-icons/bs";



const page = () => {
	const router = useRouter();
	return (
		<div className="min-h-screen bg-[#CEC1A3] flex flex-col justify-center items-center">
			{/* Icon */}
			<CheckCircleOutlineIcon className="text-green-500  font-light w-[50px]! h-[50px]! mb-15" />

			{/* Text */}
			<div className="flex flex-col items-center text-center space-y-2">
				<p className="font-semibold text-2xl">Your Order</p>
				<p className="font-semibold text-2xl">has been Confirmed</p>
				<p className="font-semibold text-2xl">Successfully</p>
			</div>
            <BsBoxSeam  className="w-15 h-15 mt-10"/>
			<button
				className="bg-[#7B3F0080] border-black border-1 cursor-pointer hover:bg-[#7B3F00CC] rounded-md py-2 px-20 mt-10 font-semibold"
				onClick={() => router.push("/")}
			>
				Close
			</button>
			<p className="mt-10 bg-red-800 text-gray-950 rounded-md py-1 px-2">
				Un appel sera effectué Aujourd’hui <br />
				uniquement pour confirmer <br />
				la commande.
			</p>
		</div>
	);
};

export default page;
