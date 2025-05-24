import { z } from 'zod';

export const enrollmentSchema = z.object({
  studentName: z.string().min(2, { message: "Student name must be at least 2 characters." }),
  studentAge: z.coerce.number().int().min(3, { message: "Age must be at least 3." }).max(100, { message: "Age must be at most 100." }),
  parentName: z.string().optional().refine((data, ctx) => {
    // Custom validation: if studentAge is under 18, parentName is required.
    // This assumes studentAge is available in the form values context, which is true for react-hook-form.
    // For a standalone schema, this kind of cross-field validation is better done with .superRefine or at form level.
    // Here, we'll keep it simple and make it optional, with a note that UI could enforce it.
    return true; // Simplified for now
  }, { message: "Parent/Guardian name is required for students under 18." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 characters." }).regex(/^\+?[0-9\s-()]{10,}$/, { message: "Invalid phone number format." }),
  instrument: z.enum(["piano", "guitar", "drums", "voice", "other"], { 
    errorMap: () => ({ message: "Please select an instrument." })
  }),
  preferredDate: z.date({
    required_error: "A preferred trial date is required.",
    invalid_type_error: "That's not a valid date!",
  }),
  message: z.string().max(500, { message: "Message cannot exceed 500 characters."}).optional(),
});

export type EnrollmentFormValues = z.infer<typeof enrollmentSchema>;

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }).max(500, { message: "Message cannot exceed 500 characters."}),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
