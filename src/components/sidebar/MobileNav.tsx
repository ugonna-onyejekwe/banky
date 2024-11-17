"use client";

import React, { useState } from "react";
import { Logo } from "../logo";
import { LuMenu } from "react-icons/lu";
import MobileSidebar from "./MobileSidebar";

const MobileNav = ({ user }: { user: User }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="flex  justify-between items-center w-full sticky top-0 left-0 right-0 shadow-customShadow px-[5%] py-[20px] min-[900px]:hidden">
      <Logo />

      <span
        className="text-[20px] cursor-pointer"
        onClick={() => setIsActive(true)}
      >
        <LuMenu />
      </span>

      {isActive && (
        <MobileSidebar isOpen={isActive} setIsOpen={setIsActive} user={user} />
      )}
    </div>
  );
};

export default MobileNav;
