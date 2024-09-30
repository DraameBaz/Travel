const { z } = require('zod');

const ContactUsSchema = z.object({

  email: z
  .string({required_error:"Email is required"})
    .email({ message: "Invalid email address" })
    .max(100, { message: "Email cannot exceed 100 characters" })
  ,
  phoneno: z
  .string({required_error:"Phone number is required"})
    .regex(/^\d{11}$/, { message: "Phone number must be exactly 9 digits" }),
    message:z.string({required_error:"Message is Required"}).min(5,{message:"Message must be greater than 2 words"}).max(500,{message:"Message must not be greater than 500 words"})
  
});

module.exports = ContactUsSchema;
