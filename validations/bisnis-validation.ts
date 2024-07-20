import { z } from 'zod';

const MAX_FILE_SIZE = 3000000;
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];

export const createBisnisValidation = z.object({
  profileBisnis: z
    .any()
    .refine((files) => files?.length >= 1, { message: '*Masukkan profile bisnis anda.' })
    .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, 'Max image size is 3MB.')
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      'Only .jpg, .jpeg, .png and .webp formats are supported.'
    ),
  nameBisnis: z
    .string()
    .min(1, '*Masukkan nama bisnis anda')
    .max(20, '*Nama busines maximal 20 karakter'),
  username: z.string().min(1, '*Masukkan nama anda'),
  whatsapp: z.string().optional(),
  phone: z.string().optional(),
  instagram: z.string().optional(),
  urlInstagram: z.string().optional(),
  tiktok: z.string().optional(),
  urlTiktok: z.string().optional(),
  facebook: z.string().optional(),
  urlFacebook: z.string().optional(),
  shopee: z.string().optional(),
  urlShopee: z.string().optional(),
  tokopedia: z.string().optional(),
  urlTokopedia: z.string().optional(),
  lazada: z.string().optional(),
  urlLazada: z.string().optional(),
  googleMaps: z.string().optional(),
  alamat: z.string().min(1, '*Masukkan alamat anda'),
  description: z.string().optional(),
});

export const updateBisnisValidation = z.object({
  // profileBisnis: z
  //   .any()
  //   .refine((files) => files?.length >= 1, { message: '*Masukkan profile bisnis anda.' })
  //   .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, 'Max image size is 3MB.')
  //   .refine(
  //     (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
  //     'Only .jpg, .jpeg, .png and .webp formats are supported.'
  //   )
  //   .optional(),
  nameBisnis: z
    .string()
    .min(1, '*Masukkan nama bisnis anda')
    .max(20, '*Nama busines maximal 20 karakter'),
  username: z.string().min(1, '*Masukkan nama anda'),
  whatsapp: z.string().optional(),
  phone: z.string().optional(),
  instagram: z.string().optional(),
  urlInstagram: z.string().optional(),
  tiktok: z.string().optional(),
  urlTiktok: z.string().optional(),
  facebook: z.string().optional(),
  urlFacebook: z.string().optional(),
  shopee: z.string().optional(),
  urlShopee: z.string().optional(),
  tokopedia: z.string().optional(),
  urlTokopedia: z.string().optional(),
  lazada: z.string().optional(),
  urlLazada: z.string().optional(),
  googleMaps: z.string().optional(),
  alamat: z.string().min(1, '*Masukkan alamat anda'),
  description: z.string().optional(),
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
