import React from "react";
import Profile_image from "./Profile_image";

const HomeRightSideBar = () => {
  return (
    <>
      {/* header image */}
      <div>
        <div className="profile_bg h-[150px] relative">
          <div className="absolute bottom-[-70%] left-[40px]  translate-y-[-50%]">
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
    </>
  );
};

export default HomeRightSideBar;
