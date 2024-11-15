import React from "react";
import SidebarContent from "./sidebarContent";

const Sidebar = () => {
  return (
    <div className="border-r-2 h-screen w-[300px]  max-[1024px]:w-fit px-[20px]  max-[1024px]:px-[10px] max-[900px]:hidden">
      <SidebarContent type={"lg_sidebar"} />
    </div>
  );
};

export default Sidebar;
