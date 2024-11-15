"use client";

import React from "react";
import { navLinks } from "./navlinks";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const SidebarContent = ({ type }: { type: "lg_sidebar" | "sm_sidebar" }) => {
  const pathname = usePathname();

  return (
    <div>
      <div
        className={cn("flex items-center gap-1 mt-[30px]", {
          "max-[1024px]:justify-center ": type === "lg_sidebar",
        })}
      >
        <Image
          src="/logo.png"
          alt="logo"
          height={50}
          width={50}
          className={cn("size-[40px]", {
            "max-[1024px]:size-[50px]": type === "lg_sidebar",
          })}
        />

        <h1
          className={cn("font-extrabold text-[17px] text-dark-1", {
            "max-[1024px]:hidden": type === "lg_sidebar",
          })}
        >
          Banky
        </h1>
      </div>

      <div className="mt-[40px] flex flex-col gap-1 ">
        {navLinks.map((i, key) => {
          const isActive =
            i.path === pathname || pathname.startsWith(`${i.path}/`);

          return (
            <Link
              href={i.path}
              key={key}
              className={cn(
                "flex items-center gap-2 w-full py-[20px] px-[14px] capitalize rounded-md ",
                {
                  "bg-primary-1 text-white": isActive,
                  "max-[1024px]:px-[25px] max-[1024px]:py-[20px]":
                    type === "lg_sidebar",
                }
              )}
            >
              <Image
                src={i.icon}
                alt="icon"
                height={50}
                width={50}
                className={cn("size-[25px]", {
                  "brightness-[3] invert-0": isActive,
                })}
              />

              <h5
                className={cn({
                  "max-[1024px]:hidden": type === "lg_sidebar",
                })}
              >
                {i.name}
              </h5>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SidebarContent;
