import React from "react";

export default function Carousel() {
  return (
    <div>
      <section className="bg-gradient-to-r from-black to-gray-700">
        <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-gray-700 h-auto md:h-full flex flex-col">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <img
                  src="https://img.freepik.com/free-photo/view-3d-delicious-looking-burger_23-2150914673.jpg?t=st=1730041736~exp=1730045336~hmac=b016b830dfad5e7c511f072287953aa74017fe3e3ca80df0f2aa9841fdbb1d67&w=740"
                  alt="burger 1"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                  Classic Bites
                </h3>
              </a>
            </div>

            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-gray-700 h-auto md:h-full flex flex-col">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <img
                  src="https://img.freepik.com/free-photo/hamburger-with-glass-water-side_188544-12233.jpg?t=st=1730042662~exp=1730046262~hmac=4f49cff3926cc2c46c2c724ee4a29294ecbab6ec910c24106aec4a01ace439b1&w=996"
                  alt="burger 2"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                  Gourmet Grills
                </h3>
              </a>
              <div className="grid gap-4 grid-cols-2 sm:grid-col-2 lg:grid-cols-2">
                <a
                  href=""
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <img
                    src="https://img.freepik.com/free-photo/front-view-burger-with-french-fries_23-2148234991.jpg?t=st=1730043627~exp=1730047227~hmac=343cab61b5ed75647a823e61337392944f267ae30dfdd6000eaa11965f6e71e4&w=900"
                    alt="burger 3"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                    Spicy Masala
                  </h3>
                </a>
                <a
                  href=""
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <img
                    src="https://img.freepik.com/premium-photo/hamburger-with-onions-onions-peppers-table_747552-54333.jpg?ga=GA1.1.123056461.1726748667&semt=ais_hybrid"
                    alt="burger 4"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                    veggie
                  </h3>
                </a>
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-gradient-to-r from-black to-gray-700 h-auto md:h-full flex flex-col">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <img
                  src="https://img.freepik.com/premium-photo/mouthwatering-tower-juicy-cheesy-burgers_963414-5178.jpg?w=360"
                  alt="burger 5"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                  Cheesy Delight
                </h3>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
