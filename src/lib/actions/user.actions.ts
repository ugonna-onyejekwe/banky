"use server";

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";

// sign up user
export const signUp = async (data: signUpProps) => {
  try {
    const { email, password, firstName, lastName } = data;

    const { account } = await createAdminClient();

    const newUser = await account.create(
      ID.unique(),
      email,
      password,
      `${firstName} ${lastName}`
    );

    const session = await account.createEmailPasswordSession(email, password);

    (await cookies()).set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    return parseStringify(newUser);
  } catch (error) {
    console.log(error);
  }
};

// sign in user
export const signIn = async ({ email, password }: signInProps) => {
  try {
    const { account } = await createAdminClient();

    const response = await account.createEmailPasswordSession(email, password);

    return parseStringify(response);
  } catch (error) {
    console.error("Error", error);
  }
};

// get logged in user
export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    const loggedInUser = await account.get();

    return parseStringify(loggedInUser);
  } catch (error) {
    return null;
  }
}

export const logoutAccount = async () => {
  try {
    const { account } = await createSessionClient();

    (await cookies()).delete("appwrite-session");

    await account.deleteSession("current");
  } catch (error) {
    return null;
  }
};
