import { getLoggedInUser } from "@/lib/actions/user.actions";
import React from "react";

const ConnectPlaid = async () => {
  const user = await getLoggedInUser();

  console.log(user);

  return <div>ConnectPlaid</div>;
};

export default ConnectPlaid;
