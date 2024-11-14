"use client";

import { LoginFormSchema } from "@/lib/formSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomField from "./CustomField";

const LoginForm = () => {
  // zod validation
  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  //   formSubmit function
  function onSubmit(values: z.infer<typeof LoginFormSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default LoginForm;
