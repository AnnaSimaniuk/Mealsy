import * as z from "zod";

export const profileValidation = z.object({
  userName: z
    .string()
    .min(2, "Name must be at least 2 characters long")
    .optional(),
  birthDate: z.date().optional(),
  gender: z.string().optional(),
  email: z.string().email("Invalid email address").optional(),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(30, "Password must be less than 30 characters long")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,30}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    )
    .optional(),
});
