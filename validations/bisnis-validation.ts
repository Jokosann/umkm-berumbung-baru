import { z } from 'zod';

export const createBisnisValidation = z.object({
  imageBisnis: z
    .instanceof(File)
    .refine((file) => file.size === 0 || file.type.startsWith('image/'), {
      message: '*Hanya gambar yang diperbolehkan',
    })
    .refine((file) => file.size < 2000000, {
      message: '*Gambar harus kurang dari 2MB',
    }),
  nameBisnis: z.string(),
  whatsapp: z.string().optional(),
  instagram: z.string().optional(),
  urlInstagram: z.string().optional(),
  tiktok: z.string().optional(),
  urlTiktok: z.string().optional(),
  facebook: z.string().optional(),
  urlFacebook: z.string().optional(),
  lokasiGoogleMaps: z.string().optional(),
  lokasiNamaJalan: z.string().optional(),
  keterangan: z.string().optional(),
});

export const updateBisnisValidation = z.object({
  nameBisnis: z.string().min(1, { message: '*tolong masukkan nama bisnis anda' }),
  whatsapp: z.string().optional(),
  instagram: z.string().optional(),
  urlInstagram: z.string().optional(),
  tiktok: z.string().optional(),
  urlTiktok: z.string().optional(),
  facebook: z.string().optional(),
  urlFacebook: z.string().optional(),
  lokasiGoogleMaps: z.string().optional(),
  lokasiNamaJalan: z.string().optional(),
  keterangan: z.string().optional(),
});

export const updateProfileBisnisValidation = z.object({
  profileBisnis: z
    .instanceof(File)
    .refine((file) => file.size === 0 || file.type.startsWith('image/'), {
      message: '*Hanya gambar yang diperbolehkan',
    })
    .refine((file) => file.size < 500000, {
      message: '*Gambar harus kurang dari 2MB',
    }),
});
