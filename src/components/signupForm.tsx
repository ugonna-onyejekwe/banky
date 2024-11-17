"use client";

import { SignUpFormSchema } from "@/lib/formSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form } from "@/components/ui/form";
import CustomField from "./CustomField";
import SubmitButton from "./submitButton";
import { signUp } from "@/lib/actions/user.actions";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const SignUpForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const route = useRouter();
  // zod validation
  const form = useForm<z.infer<typeof SignUpFormSchema>>({
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {
      lastName: "",
      firstName: "",
      address: "",
      city: "",
      state: "",
      postalCode: "",
      dateOFBirth: new Date(),
      ssn: "",
      email: "",
      password: "",
    },
  });

  //   formSubmit function
  async function onSubmit(data: z.infer<typeof SignUpFormSchema>) {
    setIsLoading(true);
    try {
      // sign up a user with Appwrite && get plaid token
      const user = await signUp(data);

      if (user) route.push("/connect-plaid");
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
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

        <CustomField
          placeholder="Enter city"
          label="City"
          control={form.control}
          name="city"
          type={"TEXT"}
        />

        <div className="flex gap-5 items-center   max-[500px]:flex-col   ">
          <CustomField
            placeholder="Enter state"
            label="State"
            control={form.control}
            name="state"
            type={"TEXT"}
          />

          <CustomField
            placeholder="ex: 1234"
            label="Postal code"
            control={form.control}
            name="postalCode"
            type={"NUMBER"}
          />
        </div>

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

        <SubmitButton text="Submit" loading={isLoading} />
      </form>
    </Form>
  );
};

export default SignUpForm;
