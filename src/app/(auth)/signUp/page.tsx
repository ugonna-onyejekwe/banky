import { Logo } from "@/components/logo";
import SignUpForm from "@/components/signupForm";
import Link from "next/link";
import React from "react";

const SignUp = () => {
  return (
    <div className="bg-primary-2 size-full min-h-screen flex-1  pt-[30px] px-[100px] max-[700px]:px-[50px] max-[500px]:px-[5%]">
      <Logo />

      <h2 className="mt-[70px]"> Sign up</h2>
      <p className="pt-1">Welcome back! Please enter your details.</p>

      <div className="my-[30px]">
        <SignUpForm />
      </div>

      <p>
        Already have an account?{" "}
        <Link href={"/signUp"} className="text-primary-1 hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
