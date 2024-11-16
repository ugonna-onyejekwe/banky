import Image from "next/image";
import React from "react";

const BankCard = () => {
  return (
    <div className="flex w-full cursor-pointer  shadow-customShadow rounded-lg bg-bank-gradient  h-[170px]  overflow-hidden">
      <div className="flex flex-col justify-between p-[15px] flex-1">
        <h3 className="font-bold text-white text-[15px] whitespace-nowrap">
          Onyejekwe Ugonna
        </h3>

        <div>
          <h4 className="uppercase font-thin text-[12px] text-gray-200 flex gap-3 justify-between">
            Onyejekwe ugonna <span> ●●/ ●●</span>
          </h4>

          <p className=" mt-3 text-[13px] text-gray-200">
            ●●●● ●●●● ●●●● <span>1234</span>
          </p>
        </div>
      </div>

      <div className="bg-bank-gradient w-[50px] bg-cover bg-no-repeat p-[10px] flex flex-col justify-between items-end">
        <Image
          src="/icons/Paypass.svg"
          alt="bank icon"
          height={40}
          width={300}
          className="size-[30px]"
        />
        <Image
          src="/icons/mastercard.svg"
          alt="bank icon"
          height={40}
          width={300}
          className="size-[30px]"
        />
      </div>
    </div>
  );
};

export default BankCard;
