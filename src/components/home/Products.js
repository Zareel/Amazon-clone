import React from "react";
import { useLoaderData } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import ApiIcon from "@mui/icons-material/Api";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Products = () => {
  const data = useLoaderData();
  const productData = data.data;
  console.log(productData);
  return (
    <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-10 px-4">
      {productData.map((item) => (
        <div
          key={item.id}
          className="bg-white h-auto flex flex-col gap-4 border-[1px] border-gray-200 py-6 z-30 hover:border-transparent shadow-none hover:shadow-testShadow duration-200 relative "
        >
          <span className="absolute top-2 right-2 italic font-light text-gray-500  text-xs">
            {item.category}
          </span>
          <div className="w-full h-auto flex items-center justify-center relative group">
            <img
              className="w-52 h-64 object-contain"
              src={item.image}
              alt="productImage"
            />
            <ul className="absolute bottom-[-170px] w-full h-36 bg-gray-200 flex flex-col gap-2 items-end justify-center font-titleFont px-2 border-1 border-r group-hover:bottom-0 duration-700">
              <li className="productLi">
                Compare
                <span>
                  <ApiIcon />
                </span>
              </li>
              <li className="productLi">
                Add to Cart
                <span>
                  <ShoppingCartIcon />
                </span>
              </li>
              <li className="productLi">
                View details
                <span>
                  <ArrowCircleRightIcon />
                </span>
              </li>
              <li className="productLi">
                Add to Wishlist
                <span>
                  <FavoriteIcon />
                </span>
              </li>
            </ul>
          </div>
          <div className="px-4 z-10 bg-white">
            <div className="flex item-center justify-between ">
              <h2 className="font-titleFont tracking-wide text-lg text-amazon-blue">
                {item.title.substring(0, 20)}
              </h2>
              <p className="text-sm text-gray-600 font-semibold">
                ${item.price}
              </p>
            </div>
            <div className="px-4">
              <p className="text-sm">
                {item.description.substring(0, 100)} ...
              </p>
              <div className="text-yellow-500">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
            </div>
            <button className="w-full font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200  hover:from-yellow-300 hover:to-yellow-500 border hover:border-border-yellow-700 avtive:bg-gradient-bl active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
