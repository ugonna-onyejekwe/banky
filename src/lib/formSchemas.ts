import { z } from "zod";

export const LoginFormSchema = z.object({
  email: z.string().email(),
  password: z.string({ message: "Enter password" }).min(2),
});

export const SignUpFormSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  address: z.string(),
  state: z.string(),
  postalCode: z.string(),
  dateOFBirth: z.date(),
  ssn: z.number(),
  email: z.string().email(),
  password: z.string({ message: "Enter password" }).min(2),
});
