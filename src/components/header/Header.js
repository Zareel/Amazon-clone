import React, { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { logo } from "../../assets/index";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import { allItems } from "../../constants";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HeaderBottom from "./HeaderBottom";
import { Link } from "react-router-dom";
const Header = () => {
  const [showAll, setShowAll] = useState(false);
  const ref = useRef();
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (e.target.contains(ref.current)) {
        setShowAll(false);
      }
    });
  }, [ref, showAll]);
  console.log(showAll);
  return (
    <div className="w-full sticky top-0 z-50">
      <div className="w-full bg-amazon_blue text-white px-4 py-3 flex items-center gap-4">
        {/* image */}
        <div className="headerHover">
          <img className="w-24 mt-2" src={logo} alt="logo" />
        </div>
        {/* deliver */}

        <div className="headerHover hidden mdl:inline-flex">
          <LocationOnIcon />
          <p className="text-sm text-lightText font-light flex flex-col">
            Hello{" "}
            <span className="text-sm font-semibold text-whiteText">
              Select your address
            </span>
          </p>
        </div>
        {/* searchbar */}
        <div className="h-10  rounded-md hidden lgl:flex flex-grow items-center justify-center  relative">
          <span
            ref={ref}
            onClick={() => setShowAll(!showAll)}
            className=" w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer flex justify-center items-center rounded-tl-md rounded-bl-md text-amazon_blue"
          >
            All
            <span>
              <ArrowDropDownIcon />
            </span>
          </span>

          {showAll && (
            <div>
              <ul className="absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2 flex flex-col gap-1 z-50">
                {/*
              <li className="text-sm tracking-wide font-titleFont hover:bg-gray-300 duration-200 ">
                  All Departments
                </li>
            */}
                {allItems.map((item) => (
                  <li key={item.id}>{item.title}</li>
                ))}
              </ul>
            </div>
          )}

          <input
            className="h-full text-base text-amazon_blue flex  flex-grow outline-none border-none px-2"
            type="text"
          />
          <span className="w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md ">
            <SearchIcon />
          </span>
        </div>
        {/* signin */}
        <Link to="/signin">
          <div className="flex flex-col items-start justify-center headerHover">
            <p className="text-sm mdl:text-xs text-white  md:text-lightText font-light flex flex-col">
              Hello, sign in
            </p>
            <p className="text-sm font-semibold -mt-1 text-whiteText hidden mdl:inline-flex">
              Account & lists{" "}
              <span>
                <ArrowDropDownIcon />
              </span>
            </p>
          </div>
        </Link>

        {/* oredr */}
        <div className=" hidden lgl:inline-flex  flex-col items-start justify-center headerHover ">
          <p className="text-xs text-lightText font-light flex flex-col">
            Returns
          </p>
          <p className="text-sm font-semibold -mt-1 text-whiteText">
            & Orders{" "}
          </p>
        </div>
        {/* cart */}
        <div className="flex flex-col items-start justify-center headerHover relative">
          <ShoppingCartIcon />
          <p className="text-xs font-semibold mt-1 text-whiteText">
            Cart
            <span className="absolute text-xs -top-1 left-6 font-semibold p-1 h-4 bg-[#f3a847] rounded-full flex justify-center items-center">
              0
            </span>
          </p>
        </div>
      </div>
      <HeaderBottom />
    </div>
  );
};

export default Header;
