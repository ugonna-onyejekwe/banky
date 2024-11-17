import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const Profile_image = ({ name, image, className }: profileImageProps) => {
  const ProfileSymbol = name?.slice(0, 1);

  return (
    <div
      className={cn(
        "flex items-center justify-center p-1 shadow-customShadow  rounded-full bg-white",
        className
      )}
    >
      {image && image !== "" ? (
        <Image
          src={image}
          alt="user image"
          height={150}
          width={150}
          className="size-full rounded-full"
        />
      ) : (
        <div className="bg-primary-1/10 rounded-full size-full flex items-center justify-center text-[30px]  uppercase text-primary-1 font-extrabold">
          {ProfileSymbol}
        </div>
      )}
    </div>
  );
};

export default Profile_image;
