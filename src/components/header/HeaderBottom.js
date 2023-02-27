import React, { useRef, useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";

import SideNavContent from "./sideNavContent";
const HeaderBottom = () => {
  const ref = useRef();
  const [sideBar, setSideBar] = useState(false);
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (e.target.contains(ref.current)) {
        setSideBar(false);
      }
    });
  }, [ref, sideBar]);
  return (
    <div className="w-full px-4 h-[38px] bg-amazon_light text-white flex items-center">
      <ul className="flex items-center gap-2 text-xs">
        <li
          className="headerHover font-semibold"
          onClick={() => setSideBar(true)}
        >
          <MenuIcon /> All
        </li>
        <li className="headerHover hidden lg:inline-flex">Amazon miniTV</li>
        <li className="headerHover hidden lg:inline-flex">Best Sellers</li>
        <li className="headerHover hidden lg:inline-flex">Mobiles</li>
        <li className="headerHover hidden lg:inline-flex">Customer Service</li>
        <li className="headerHover hidden lg:inline-flex">Today's Deals</li>
        <li className="headerHover hidden lg:inline-flex">Electronics</li>
        <li className="headerHover hidden lg:inline-flex">
          Prime <ArrowDropDownIcon />
        </li>
        <li className="headerHover hidden lg:inline-flex">Amazon Pay</li>
        <li className="headerHover hidden lg:inline-flex">Fasion </li>
        <li className="headerHover hidden lg:inline-flex">New Releases</li>
        <li>
          {" "}
          <img
            src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/Farzi-Launch/400x39-SWM_NP._CB613859124_.jpg"
            alt="img"
          />
        </li>
      </ul>
      {sideBar && (
        <div className="w-full h-screen text-black fixed top-0 left-0 bg-amazon_blue bg-opacity-50">
          <div className="w-full h-full relative">
            <motion.div
              ref={ref}
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-[80%] md:w-[350px] h-full bg-white border border-black"
            >
              <div className="w-full bg-amazon_blue text-white py-2 px-6 flex item-center gap-4">
                <AccountCircleIcon />
                <h3>Hello, sign in</h3>
              </div>
              <SideNavContent
                title="Treding"
                one="Best Sellers"
                two="New Releases"
                three="Movers and Shakers"
              />
              <SideNavContent
                title="Digital content and Devices"
                one="Echo & Alexa "
                two="Fire TV"
                three="Kindle E-Readers and e-Books"
                four="Audible Audiobooks"
                five="Amazon Prime Video"
                six="Amazon Prime Music"
              />
              <SideNavContent
                title="Shop By Category"
                one="Mobile and Computers"
                two="TV, Appliances, Electronics"
                three="Mens's Fashion"
                four="Womens's Fashion"
              />
              <span
                onClick={() => setSideBar(false)}
                className="cursor-pointer absolute top-0 left-[360px] w-10 h-10 text-white text-lg duration-300 flex items-center justify-center "
              >
                <CloseIcon />
              </span>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderBottom;
