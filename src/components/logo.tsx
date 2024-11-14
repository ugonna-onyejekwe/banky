import Image from "next/image";

export const Logo = () => {
  return (
    <div className="flex items-center gap-1">
      <Image
        src="/logo.png"
        alt="logo"
        height={200}
        width={200}
        className="h-[40px] w-[40px]"
      />
      <h1 className="text-dark-1 font-semibold text-[18px] max-[500px]:text-[15px] ">
        Banky
      </h1>
    </div>
  );
};
