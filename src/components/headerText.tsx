import React from "react";

const Headercontent = ({
  headerText,
  subHeadertext,
  subText,
}: headerContentProps) => {
  return (
    <div>
      <h1 className="font-extrabold text-[30px] text-dark-1">
        {headerText}
        <span className="text-primary-1">{subHeadertext && subHeadertext}</span>
      </h1>
      <p className="text-[16px]">{subText}</p>
    </div>
  );
};

export default Headercontent;
