import React from "react";

export default function Banner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-black to-gray-700 font-sans px-6 py-12 mb-7 text-white">
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://img.freepik.com/free-photo/exploding-burger-with-vegetables-melted-cheese-black-background-generative-ai_157027-1734.jpg?t=st=1730032056~exp=1730035656~hmac=f04f543e62789cb625b00e12cab87d4a609f785110867012c460f68ef7a14734&w=996"
          alt="delicious burger banner"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 container mx-auto flex flex-col justify-center items-center text-center">
        <h2 className="sm:text-5xl font-bold mb-4">Discover Our Menu</h2>
        <p className="text-lg text-center mb-6 max-w-xl">
          Shop Now For Exclusive Burger Discount!
        </p>
        <button
          type="button"
          className="bg-cyan-500 text-sm font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
        >
          Exciting Deals Launch at 12 PM!
        </button>
      </div>
    </div>
  );
}
