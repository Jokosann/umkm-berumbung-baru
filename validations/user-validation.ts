import { z } from 'zod';

export const updateProfileValidation = z.object({
  profile: z
    .instanceof(File)
    .refine((file) => file.size === 0 || file.type.startsWith('image/'), {
      message: '*Hanya gambar yang diperbolehkan',
    })
    .refine((file) => file.size < 500000, {
      message: '*Gambar harus kurang dari 2MB',
    }),
});

export const updateUserDataValidation = z.object({
  firstName: z.string().min(1),
  lastName: z.string().optional(),
  email: z.string().email(),
  contact: z.string().optional(),
  alamat: z.string().optional(),
});
