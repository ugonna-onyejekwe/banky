import AccountBalanceCounter from "@/components/AccountBalanceCounter";
import DoughnutChart from "@/components/doughnutChart";
import Headercontent from "@/components/headerText";
import HomeRightSideBar from "@/components/HomeRightSideBar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { formatAmount } from "@/lib/utils";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";

export default async function Home() {
  const user = await getLoggedInUser();
  console.log(user);

  return (
    <div className="flex">
      <div className="mt-[30px] px-[30px] flex-1">
        <Headercontent
          headerText="Welcome, "
          subHeadertext={user?.name?.split(" ")?.[0]}
          subText="Access & manage your account and transactions efficiently."
        />

        {/* balance section */}
        <div className="relative shadow-customShadow rounded-md p-[20px] mt-[20px] flex gap-3">
          <div className="size-[130px]">
            <DoughnutChart />
          </div>

          <div>
            <h2 className="font-bold text-dark-1 text-[17px]">
              Bank accounts: {1}
            </h2>

            <p className="mt-[30px]">Total current balance</p>

            <div className="font-extrabold text-dark-1 text-[20px]">
              <AccountBalanceCounter amount={200000} />
            </div>
          </div>

          <Link
            href={"/connet-bank"}
            className="absolute top-[15px] right-[15px]  text-primary-1 text-[14px] hover:text-primary-1/80 transition-all flex items-center gap-1"
          >
            <span className="leading-0">
              <FaPlus />
            </span>
            Add bank
          </Link>
        </div>
      </div>

      {/*right side bar */}

      <div className="max-xl:hidden h-screen w-[300px] border-l">
        <HomeRightSideBar user={user} />
      </div>
    </div>
  );
}
