import LoginForm from "@/components/loginForm";
import { Logo } from "@/components/logo";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div className="flex items-center gap-20 min-h-screen h-screen max-[500px]:h-full max-[500px]:min-h-screen">
      <div className="bg-primary-2 size-full min-h-screen flex-1  pt-[30px] px-[100px] max-[700px]:px-[50px] max-[500px]:px-[5%]">
        <Logo />

        <h2 className="mt-[100px]">Log in</h2>
        <p className="pt-1">Welcome back! Please enter your details.</p>

        <div className="my-[30px]">
          <LoginForm />
        </div>

        <p>
          Don't have an account?{" "}
          <Link href={"/signUp"} className="text-primary-1 hover:underline">
            sign up
          </Link>
        </p>
      </div>

      <div className="max-[900px]:hidden size-full flex-1">
        <div className="flex items-center justify-center size-full">
          <Image src="/auth-img.jpg" alt="image" height={600} width={600} />
        </div>
      </div>
    </div>
  );
};

export default Login;
