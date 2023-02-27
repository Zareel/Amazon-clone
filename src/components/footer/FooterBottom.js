import React from "react";
import { footerBottomItem } from "../../constants";

const FooterBottom = () => {
  return (
    <div className="w-full bg-footerBottom  py-8">
      <div className="max-w-5xl mx-auto px-4">
        <div className="w-full grid grid-cols-3 md:grid-cols-5 lg-grid-cols-6 gap-6 text-gray-400 font-titleFont text-xs cursor-pointer ">
          {footerBottomItem.map((item) => (
            <div className="w-32" key={item.id}>
              <h3 className="text-gray-300 hover:underline">{item.title}</h3>
              <p className="hover:underline">{item.des}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
