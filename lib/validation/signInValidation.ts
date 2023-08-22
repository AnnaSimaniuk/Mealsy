import * as z from "zod";

export const signInValidation = z.object({
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(30, "Password must be less than 30 characters long")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,30}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character"
    ),
});
