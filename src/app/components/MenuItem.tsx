import React from "react";
import { FaCartShopping } from "react-icons/fa6";

const ProductCardGrid = () => {
  const productImages = [
    {
      id: 1,
      name: "Cheesy Burger",
      image:
        "https://static.vecteezy.com/system/resources/previews/027/564/813/large_2x/juicy-and-delicious-burger-food-ready-to-eat-with-light-burger-and-lettuce-chunks-topped-with-sauce-hamburger-generative-ai-free-photo.jpg ",
      price: "$189",
      oldPrice: "$250",
    },
    {
      id: 2,
      name: "Beef Burger",
      image:
        "https://static.vecteezy.com/system/resources/previews/026/190/727/large_2x/side-view-of-a-burger-on-a-dark-rustic-background-with-beef-and-cream-cheese-realistic-close-up-ai-generative-free-photo.jpg",
      price: "$149",
      oldPrice: "$180",
    },
    {
      id: 3,
      name: "Chicken Burger",
      image:
        "https://static.vecteezy.com/system/resources/previews/026/190/728/large_2x/side-view-of-a-burger-on-a-dark-rustic-background-with-beef-and-cream-cheese-realistic-close-up-ai-generative-free-photo.jpg",
      price: "$139",
      oldPrice: "$150",
    },
    {
      id: 4,
      name: "veggie Burger",
      image:
        "https://static.vecteezy.com/system/resources/previews/026/190/724/large_2x/side-view-of-a-burger-on-a-dark-rustic-background-with-beef-and-cream-cheese-realistic-close-up-ai-generative-free-photo.jpg",
      price: "$99",
      oldPrice: "$120",
    },
    {
      id: 5,
      name: "Sooper Tasty Burger",
      image:
        "https://static.vecteezy.com/system/resources/previews/026/190/732/large_2x/side-view-of-a-burger-on-a-dark-rustic-background-with-beef-and-cream-cheese-realistic-close-up-ai-generative-free-photo.jpg",
      price: "$169",
      oldPrice: "$190",
    },
    {
      id: 6,
      name: "Low Spice Burger",
      image:
        "https://static.vecteezy.com/system/resources/previews/026/190/730/large_2x/side-view-of-a-burger-on-a-dark-rustic-background-with-beef-and-cream-cheese-realistic-close-up-ai-generative-free-photo.jpg",
      price: "$139",
      oldPrice: "$170",
    },
  ];
  return (
    <div className="relative text-center p-10">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('https://img.freepik.com/free-vector/realistic-cheeseburger-chalkboard-background_79603-1044.jpg?t=st=1727452137~exp=1727455737~hmac=b40e3bf344f5fdba2fe646b3edb5068bfbe3d0dc17b698d00a657c40e1e58b9b&w=740')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
          opacity: 0.1,
        }}
      />
      <h1 className="font-bold text-4xl mb-4 text-white z-10 relative">
        Most Requested Items
      </h1>
      <h1 className="text-3xl text-white z-10 relative">Order Now...</h1>
      <section
        id="projects"
        className="w-full mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-col-2 justify-items-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={productImages[index].id}
            className="w-70 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl z-10 relative"
          >
            <a href="#">
              <img
                src={productImages[index].image}
                alt={`product ${index + 1}`}
                className="h-80 w-72 object-cover rounded-t-xl"
              />
              <div className="px-4 py-3 w-72">
                <span className="text-slate-500 mr-3 uppercase text-xs">
                  Category
                </span>
                <p className="text-lg font-bold text-red-700 truncate block capitalize">
                  {productImages[index].name}
                </p>
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black my-3 cursor-auto">
                    {productImages[index].price}
                  </p>
                  <del>
                    <br />
                    <p className="text-sm text-blue-800 cursor-auto ml-2">
                      {productImages[index].oldPrice}
                    </p>
                  </del>
                  <div className="ml-auto">
                    <FaCartShopping className="w-5 h-5 text-blue-800" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </section>
    </div>
  );
};
export default ProductCardGrid;
