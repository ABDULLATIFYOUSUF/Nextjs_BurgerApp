import React from "react";

const products = [
  {
    id: 1,
    title: "Maxican Burger",
    category: "fixing",
    price: 200.0,
    imageUrl:
      "https://static.vecteezy.com/system/resources/previews/048/712/534/non_2x/a-burger-with-chicken-and-lettuce-on-it-free-png.png",
    bgColor: "bg-amber-500",
  },
  {
    id: 2,
    title: "Classy Burger",
    category: "delight",
    price: 150.0,
    imageUrl:
      "https://static.vecteezy.com/system/resources/previews/040/490/419/non_2x/ai-generated-burger-buns-burger-buns-free-png.png",
    bgColor: "bg-teal-500",
  },
  {
    id: 3,
    title: "Family Burger",
    category: "fixing",
    price: 400.0,
    imageUrl:
      "https://static.vecteezy.com/system/resources/previews/029/938/215/non_2x/gourmet-burger-veggies-ai-generative-free-png.png",
    bgColor: "bg-amber-500",
  },
];
export default function ProductList() {
  return (
    <div className="p-1 flex flex-wrap items-center justify-center mb-6">
      {products.map((product) => (
        <div
          key={product.id}
          className={`flex flex-col shrink-0 m-6 relative overflow-hidden ${product.bgColor} rounded-lg max-w-sm shadow-lg group`}
        >
          <svg
            className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
            viewBox="0 0 375 283"
            fill="none"
            style={{ opacity: 0.1 }}
          >
            <rect
              x="159.52"
              y="175"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 159.52 175)"
              fill="white"
            />
            <rect
              y="107.48"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 0 107.48)"
              fill="white"
            />
          </svg>
          <div className="relative pt-10 px-10 fkex items-center justify-center group-hover:scale-110 transition-transform">
            <div
              className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
              style={{
                background: "radial-gradient(black, transparent 60%",
                transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                opacity: 0.2,
              }}
            ></div>
            <img
              className="relative w-50"
              src={product.imageUrl}
              alt={product.title}
            />
          </div>

          <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1">{product.category}</span>
            <div className="flex justify-between">
              <span className="block font-semibold text-xl">
                {product.title}
              </span>
              <span className="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none items-center">
                {product.price}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
