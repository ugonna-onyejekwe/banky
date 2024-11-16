"use client";

import { LoginFormSchema } from "@/lib/formSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form } from "@/components/ui/form";
import CustomField from "./CustomField";
import SubmitButton from "./submitButton";
import { signIn } from "@/lib/actions/user.actions";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const route = useRouter();

  // zod validation
  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  //   formSubmit function
  function onSubmit(data: z.infer<typeof LoginFormSchema>) {
    setIsLoading(true);
    try {
      // sign in a user with Appwrite
      const user = signIn(data);

      // if(user)route.push("/")
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
        <CustomField
          placeholder="Enter email"
          label="Email"
          control={form.control}
          name="email"
          type={"TEXT"}
        />

        <CustomField
          placeholder="Enter password"
          label="Password"
          control={form.control}
          name="password"
          type={"PASSWORD"}
        />

        <SubmitButton text="Submit" loading={isLoading} />
      </form>
    </Form>
  );
};

export default LoginForm;
