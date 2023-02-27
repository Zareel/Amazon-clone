import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const SideNavContent = ({ title, one, two, three, four, five, six }) => {
  return (
    <div>
      <h3 className="text-lg font-titleFont font-semibold mt-6 mb-1 px-6">
        {title}
      </h3>
      <ul className="text-sm">
        <li className="flex items-start justify-between cursor-pointer gap-4 px-6 py-2 hover:bg-zinc-200 ">
          {one} <KeyboardArrowRightIcon />
        </li>
        <li className="flex items-start justify-between cursor-pointer gap-4 px-6 py-2 hover:bg-zinc-200">
          {two} <KeyboardArrowRightIcon />
        </li>
        <li className="flex items-start justify-between cursor-pointer gap-4 px-6 py-2 hover:bg-zinc-200">
          {three} <KeyboardArrowRightIcon />
        </li>
      </ul>
    </div>
  );
};

export default SideNavContent;
