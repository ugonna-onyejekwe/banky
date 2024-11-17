import React from "react";
import SidebarContent from "./sidebarContent";

const Sidebar = ({ user }: { user: User }) => {
  return (
    <div className="border-r-2 h-screen w-[300px]  max-xl:w-fit px-[20px]  max-xl:px-[10px] max-[900px]:hidden">
      <SidebarContent type={"lg_sidebar"} user={user} />
    </div>
  );
};

export default Sidebar;
