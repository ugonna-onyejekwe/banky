"use client";

import { SignUpFormSchema } from "@/lib/formSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomField from "./CustomField";

const SignUpForm = () => {
  // zod validation
  const form = useForm<z.infer<typeof SignUpFormSchema>>({
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {
      lastName: "",
      firstName: "",
      address: "",
      state: "",
      postalCode: "",
      dateOFBirth: new Date(),
      ssn: 0,
      email: "",
      password: "",
    },
  });

  //   formSubmit function
  function onSubmit(values: z.infer<typeof SignUpFormSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <div className="flex gap-5 items-center   max-[500px]:flex-col   ">
          <CustomField
            placeholder="ex: john "
            label="First name"
            control={form.control}
            name="firstName"
            type={"TEXT"}
          />

          <CustomField
            placeholder="ex: doe"
            label="Last name"
            control={form.control}
            name="lastName"
            type={"TEXT"}
          />
        </div>

        <CustomField
          placeholder="Enter address"
          label="Address"
          control={form.control}
          name="address"
          type={"TEXT"}
        />

        <div className="flex gap-5 items-center   max-[500px]:flex-col   ">
          <CustomField
            placeholder="Enter date of birth"
            label="Date of birth"
            control={form.control}
            name="dateOFBirth"
            type={"DATE"}
          />

          <CustomField
            placeholder="ex: 1234"
            label="SSN"
            control={form.control}
            name="ssn"
            type={"NUMBER"}
          />
        </div>

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

export default SignUpForm;
