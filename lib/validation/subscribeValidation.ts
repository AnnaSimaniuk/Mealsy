import * as z from "zod";

export const subscribeValidation = z.object({
  email: z.string().email("Invalid email address"),
  name: z
    .string()
    .min(2, "Name must be at least 2 characters long")
    .max(30, "Name must be less than 30 characters long"),
});
