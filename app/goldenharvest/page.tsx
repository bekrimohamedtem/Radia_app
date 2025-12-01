"use client";
import useQpStore from "@/components/useQpStore";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Page = () => {
  const router = useRouter();
  const quantity = useQpStore((state) => state.quantity);
  const price = useQpStore((state) => state.price);
  const setQuantity = useQpStore((state) => state.setQuantity);

  // Fonctions pour modifier la quantité
  const increase = () => setQuantity(quantity + 1);
  const decrease = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <div className="w-full h-full lg:max-w-6xl lg:mx-auto">
      <div className="flex flex-col items-center lg:mb-8">
        <img
          src="../LOGO.svg"
          className="w-[80%] h-[100px] lg:w-[60%] lg:h-[120px]"
          alt="LogoPage"
        />
        <p className="italianno-regular text-[#7B3F00] text-2xl lg:text-3xl">
          Natural Rhythm In Every Bite
        </p>
      </div>

      <div className="mt-6 ml-5 lg:ml-0 lg:flex lg:justify-center lg:mt-8">
        <div className="rounded-2xl lg:h-80 overflow-hidden h-50 w-45 lg:w-[600px] lg:h-[400px]">
          <img
            src="../noix.jpg"
            className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
            alt="Chocolate Dream"
          />
        </div>
      </div>

      <div className="flex ml-5 mt-2 gap-2 lg:ml-0 lg:justify-center lg:mt-4 lg:gap-4">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="rounded-2xl lg:h-80 overflow-hidden h-20 w-15 border lg:w-[180px] lg:h-[120px]"
          >
            <img
              src="../noix.jpg"
              className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
              alt="Chocolate Dream"
            />
          </div>
        ))}
      </div>

      <div className="flex justify-between mx-15 mt-3 mr-20 font-semibold items-center lg:max-w-2xl lg:mx-auto lg:mt-6 lg:text-lg">
        <div className="quantity flex items-center gap-2">
          Quantity
          <button className="cursor-pointer pl-0.5  rounded" onClick={decrease}>
            -
          </button>
          <span>{quantity}</span>
          <button className="cursor-pointer pl-0.5 rounded" onClick={increase}>
            +
          </button>
        </div>
        <div className="price">Price: {price}</div>
      </div>

      <button
        className="bg-[#7B3F00]/[0.5] py-1.5 cursor-pointer  w-65 border rounded-md mt-5 mx-auto block lg:w-80 lg:py-2 lg:text-lg lg:mt-8"
        onClick={() => router.push("goldenharvest/form")}
      >
        Commander
      </button>
    </div>
  );
};

export default Page;
