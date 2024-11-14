import { z } from "zod";

export const LoginFormSchema = z.object({
  email: z.string().email(),
  password: z.string({ message: "Enter password" }).min(2),
});
