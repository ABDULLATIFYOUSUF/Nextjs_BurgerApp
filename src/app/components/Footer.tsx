import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="flex flex-col space-y-10 justify -center mt-10 mb-0 bg-gradient-to-r from-black to-gray-900 w-full">
        <nav className="flex justify-center flex-wrap gap-6 text-slate-500 font-medium bg-gradient-to-r from-black to-slate-700">
          <a href="#" className="hover:text-cyan-500 text-amber-500">
            Home
          </a>
          <a href="#" className="hover:text-cyan-500 text-amber-500">
            About
          </a>
          <a href="#" className="hover:text-cyan-500 text-amber-500">
            Delivery
          </a>
          <a href="#" className="hover:text-cyan-500 text-amber-500">
            Contact
          </a>
        </nav>
        <div className="flex justify-center space-x-5 transition-transform duration-500 ease-in-out transform hover:scale-105">
          <a href="https://facebook.com" target="blank" rel="nofollow noopener">
          <img src="https://img.icons8.com/?size=100&id=118497&format=png&color=000000" className="w-20" alt="facebook logo" />
          </a>
          <a href="https://linkedin.com" target="blank" rel="nofollow noopener">
          <img src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000" className="w-20" alt="linkedin logo" />
          </a>
          <a href="https://instagram.com" target="blank" rel="nofollow noopener">
          <img src="https://img.icons8.com/?size=100&id=32323&format=png&color=000000" className="w-20" alt="instagram logo" />
          </a>
          <a href="https://twitter.com" target="blank" rel="nofollow noopener">
          <img src="https://img.icons8.com/?size=100&id=13963&format=png&color=000000" className="w-20" alt="twitter logo" />
          </a>
        </div>
        <p className="text-center hover:text-cyan-600 text-amber-400 font-medium mb-8 ">2024 Abdul Latif. All Rights Reserved.</p>
        <br />
        <br />
        <br />
      </footer>
    </div>
  );
}
