import React from "react";
import FooterMiddleList from "./footerMiddleList";
import { middleList } from "../../constants";
import { logo } from "../../assets";

const FooterMiddle = () => {
  return (
    <div className="w-full bg-amazon_light text-white">
      {/* top part */}
      <div className="w-full border-b-[1px] border-gray py-10">
        <div className="max-w-5xl mx-auto text-gray-300 px-4">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:place-item-center md:items-start">
            {middleList.map((item) => (
              <FooterMiddleList
                key={item.id}
                title={item.title}
                listItem={item.listItem}
              />
            ))}
          </div>
        </div>
      </div>
      {/* bottom part */}

      <div className="w-full flex gap-6 items-center justify-center py-6 ">
        <div>
          <img className="w-20 pt-3" src={logo} alt="logo" />
        </div>
        <div className="flex gap-2">
          <p className="flex gap-1 justify-center items-center border border-1px solid white p-2 hover:border-amazon_yellow cursor-pointer duration-300 ">
            English
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterMiddle;
