"use client";

import CountUp from "react-countup";

const AccountBalanceCounter = ({ amount }: { amount: number }) => {
  return (
    <>
      <CountUp end={amount} decimals={2} decimal="," prefix="$" />
    </>
  );
};

export default AccountBalanceCounter;
