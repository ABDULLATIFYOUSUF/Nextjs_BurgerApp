import React from "react";
import { FaBolt, FaHamburger, FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";


export default function Navbar() {
  return (
    <div>
      <div className="grid xl:grid-cols-1 grid-cols-1">
        <div className="p-5">
          <div className="py-3 px-3 rounded-xl border w-full bg-gradient-to-r from-black to-gray-700">
            <div className="flex justify-between items-center">
              <div className="flex justify-center items-center gap-2">
                <FaHamburger className="w-6 h-6 text-yellow-400 hover:text-cyan-400" />
                <div style={{ position: "relative" }}>
                  <input
                    placeholder="Search your favourite burger..."
                    className="rounded-3xl py-3 px-3 outline-none text-xs w-[359px] pr-10 hidden lg:block md:block"
                  />
                  <FaSearch className="w-5 h-5 text-lime-300 absolute right-3 top-1/2 transform -translate-y-1/2 hidden lg:block md:block" />
                </div>
              </div>

              <div className="flex justify-center items-center gap-2">
              <FaBolt className="w-5 h-5 text-amber-400 hidden lg:block md:block" />
              <p className="text-sm text-white hidden lg:block md:block">Order now and get it with</p>
              <span className="text-amber-400">15 minutes!</span>
              
              <FaCartShopping className="p-1 w-8 h-8 rounded-full ring-2 relative text-sky-400 hover:text-amber-400" />
              <img className="inline-block w-8 h-8 rounded-full ring-2 ring-sky-400 hover:text-amber-400" src="https://scontent.fkhi20-1.fna.fbcdn.net/v/t39.30808-1/429575454_7167412890019082_8619607606655035768_n.jpg?stp=dst-jpg_p160x160&_nc_cat=104&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEtaEWq6uPqiDp9OBZc3TgMVvvs7FuBiGtW--zsW4GIa3mKmMMcTOU8SEPVyY8nAS6I45-_IOi9Srl52cKGJIXO&_nc_ohc=wgU-dbWmnroQ7kNvgEFW5L_&_nc_zt=24&_nc_ht=scontent.fkhi20-1.fna&_nc_gid=Asmv93VyFDv_-oNI0pvvq_s&oh=00_AYDdZejofa8ptPePiGIWEyIeGFSf_Vvr7PVZSoIau_lPxA&oe=67240DD9" alt="user avatar" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
