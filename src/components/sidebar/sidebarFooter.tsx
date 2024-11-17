import React from "react";
import { MdLogout } from "react-icons/md";
import Profile_image from "../Profile_image";
import { cn } from "@/lib/utils";
import { logoutAccount } from "@/lib/actions/user.actions";
import { useRouter } from "next/navigation";

const SidebarFooter = ({ user, type }: SidebarContentProps) => {
  const router = useRouter();

  const handleLogOut = async () => {
    const loggedOut = await logoutAccount();

    if (loggedOut) router.push("/login");
  };

  return (
    <div
      className={cn(
        "absolute w-full bottom-[40px] pt-[30px]  border-t flex items-center gap-2 justify-between ",
        {
          "max-xl:justify-center": type === "lg_sidebar",
        }
      )}
    >
      <div
        className={cn("flex items-center gap-2", {
          "max-xl:hidden": type === "lg_sidebar",
        })}
      >
        <Profile_image
          name={user?.name?.split(" ")?.[0]}
          image=""
          className="h-[50px] w-[50px]"
        />

        <div>
          <h3 className="capitalize font-semibold text-[16px]">{user?.name}</h3>
          <p>{user?.email}</p>
        </div>
      </div>

      <div>
        <span
          className="cursor-pointer text-[20px] text-dark-1 hover:text-primary-1"
          onClick={handleLogOut}
        >
          <MdLogout />
        </span>
      </div>
    </div>
  );
};

export default SidebarFooter;
