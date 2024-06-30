import { z } from 'zod';

export const userLoginValidation = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const updateUserValidation = z.object({
  profile: z
    .instanceof(File)
    .refine((file) => file.size > 0, {
      message: '*Image is required',
    })
    .refine((file) => file.size === 0 || file.type.startsWith('image/'), {
      message: '*Only images are allowed',
    })
    .refine((file) => file.size < 2500000, {
      message: '*Image must less than 2.5MB',
    }),
  // firstName: z.string().min(1).max(30),
  // lastName: z.string().min(1).max(30),
  // email: z.string().email().optional(),
  // contact: z.string(),
  // alamat: z.string().min(1).max(100),
});
