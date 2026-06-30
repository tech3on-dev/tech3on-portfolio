import { z } from "zod";
import { projectTypes, budgetRanges } from "@/lib/content";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Please enter your full name")
    .max(80, "Name is too long"),
  company: z
    .string()
    .min(1, "Please enter your company")
    .max(120, "Company name is too long"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .max(30, "Phone number is too long")
    .optional()
    .or(z.literal("")),
  projectType: z
    .string()
    .refine((v) => projectTypes.includes(v), "Please select a project type"),
  budget: z
    .string()
    .refine((v) => budgetRanges.includes(v), "Please select a budget range"),
  message: z
    .string()
    .min(10, "Please tell us a little more (min. 10 characters)")
    .max(2000, "Message is too long"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
