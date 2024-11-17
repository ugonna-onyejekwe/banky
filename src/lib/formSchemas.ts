import { z } from "zod";

export const LoginFormSchema = z.object({
  email: z.string().email(),
  password: z.string({ message: "Enter password" }).min(2),
});

export const SignUpFormSchema = z.object({
  firstName: z.string().min(3),
  lastName: z.string().min(3),
  address: z.string().min(3),
  city: z.string().min(3),
  state: z.string().min(3),
  postalCode: z.string().min(3).max(6),
  dateOFBirth: z.date(),
  ssn: z.string().min(3),
  email: z.string().email(),
  password: z
    .string({ message: "Enter password" })
    .min(8, "Password must be at least 8 characters long")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(
      /[^a-zA-Z0-9]/,
      "Password must contain at least one special character"
    ),
});
