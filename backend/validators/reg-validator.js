const { z } = require('zod');

const signupSchema = z.object({
  username: z
    .string({ required_error: "Username is required" })
    .min(3, { message: "Username must be at least 3 characters long" })
    .max(100, { message: "Username cannot exceed 100 characters" }),
  
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Invalid email address" })
    .max(100, { message: "Email cannot exceed 100 characters" }),

  password: z
    .string({ required_error: "Password is required" })
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(255, { message: "Password cannot exceed 255 characters" }),

  phoneno: z
    .string({ required_error: "Phone number is required" })
    .regex(/^\d{11}$/, { message: "Phone number must be exactly 11 digits" }) // Corrected to 11 digits
});

module.exports = signupSchema;
