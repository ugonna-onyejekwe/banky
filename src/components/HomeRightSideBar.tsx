import React from "react";
import Profile_image from "./Profile_image";
import { FaPlus } from "react-icons/fa6";
import Link from "next/link";
import BankCard from "./BankCard";

const HomeRightSideBar = () => {
  return (
    <>
      {/* header image */}
      <div>
        <div className="profile_bg h-[130px] relative">
          <div className="absolute bottom-[-80%] left-[40px]  translate-y-[-50%]">
            <Profile_image name="ugonna" image="" />
          </div>
        </div>

        <div className="mt-[70px] px-3">
          <h2 className="font-bold text-dark-1 text-[20px] capitalize">
            Onyejekwe Ugonna
          </h2>
          <p>Onyejekwe@gmail.com</p>
        </div>
      </div>

      {/* bank cards */}
      <div className="mt-[30px] px-[15px]">
        {/* head */}
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-dark-1 text-[16px]">My Banks</h3>

          <Link
            href="/"
            className="flex items-center gap-1 hover:text-dark-1 text-[15px]"
          >
            <FaPlus />
            Add bank
          </Link>
        </div>

        {/* cards */}
        <div className="relative mt-[60px]">
          {/* card2 */}
          <div className=" z-10  w-full max-w-[260px]">
            <BankCard />
          </div>

          {/* card 2 */}
          <div className="absolute z-0 top-[-40px] left-3 w-full max-w-[260px]">
            <BankCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeRightSideBar;
