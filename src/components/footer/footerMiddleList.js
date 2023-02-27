import React from "react";

const FooterMiddleList = ({ title, listItem }) => {
  console.log(listItem);
  return (
    <div className="flex flex-col w-full">
      <h3 className="font-semibold text-lg">{title}</h3>
      <ul className="flex flex-col gap font-bodyFont">
        {listItem &&
          listItem.map((item) =>
            item.listData.map((data, i) => (
              <li key={i} className="footerLink">
                {data}
              </li>
            ))
          )}
      </ul>
    </div>
  );
};

export default FooterMiddleList;
