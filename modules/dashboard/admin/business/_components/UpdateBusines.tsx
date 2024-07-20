'use client';

import { Lazada, Tokopedia } from '@/common/assets/svg';
import Routerback from '@/components/ui/Routerback';
import Toaster from '@/components/ui/Toaster';
import { bisnisServices } from '@/services/bisnis';
import { updateBisnisValidation } from '@/validations/bisnis-validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { Business } from '@prisma/client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiFillTikTok } from 'react-icons/ai';
import { FaFacebook, FaMapMarkerAlt, FaPhoneAlt, FaRoad } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import { RiInstagramFill } from 'react-icons/ri';
import { SiShopee } from 'react-icons/si';
import { z } from 'zod';

type CreateBisnisSchema = z.infer<typeof updateBisnisValidation>;

export default function UpdateBusines({ busines }: { busines: Business }) {
  // console.log(busines);

  const form = useForm<CreateBisnisSchema>({
    resolver: zodResolver(updateBisnisValidation),
    defaultValues: {
      // profileBisnis: '',
      nameBisnis: busines.nameBisnis ?? '',
      username: busines.username ?? '',
      alamat: busines.alamat ?? '',
      googleMaps: busines.googleMaps ?? '',
      phone: busines.phone ?? '',
      whatsapp: busines.whatsapp ?? '',
      facebook: busines.facebook ?? '',
      urlFacebook: busines.urlFacebook ?? '',
      instagram: busines.instagram ?? '',
      urlInstagram: busines.urlInstagram ?? '',
      tiktok: busines.tiktok ?? '',
      urlTiktok: busines.urlTiktok ?? '',
      lazada: busines.lazada ?? '',
      urlLazada: busines.urlLazada ?? '',
      tokopedia: busines.tokopedia ?? '',
      urlTokopedia: busines.urlTokopedia ?? '',
      shopee: busines.shopee ?? '',
      urlShopee: busines.urlShopee ?? '',
      description: busines.description ?? '',
    },
  });

  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<any>({});

  const onSubmit = async (value: CreateBisnisSchema) => {
    setLoading(true);
    console.log(value);
    const data = {
      ...value,
    };

    try {
      const result = await bisnisServices.updateBisnis(data, busines.id);
      console.log(result);

      if (result.status === 200) {
        setLoading(false);
        setToast({
          variant: 'alert-success',
          message: 'Success update business',
        });
      } else {
        setLoading(false);
        setToast({
          variant: 'alert-success',
          message: 'Gagal update business',
        });
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    if (Object.keys(toast).length > 0) {
      setTimeout(() => {
        setToast({});
      }, 3000);
    }
  }, [setToast, toast]);

  return (
    <>
      {Object.keys(toast).length > 0 && (
        <Toaster variant={toast?.variant as string} message={toast?.message as string} />
      )}
      <Routerback />
      <h1 className="text-2xl font-bold text-primary-color">Update Business</h1>
      <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="w-full pb-8">
        <div className="grid">
          <div className="items-center text-primary-color space-y-2">
            {/* profile image */}
            {/* <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Foto Bisnis</span>
              </div>
              {form.formState.errors?.profileBisnis && (
                <p className="text-xs text-red-500 mb-2">
                  {form.formState?.errors.profileBisnis.message?.toString()}
                </p>
              )}
              <input
                {...form.register('profileBisnis')}
                type="file"
                name="profileBisnis"
                className="file-input file-input-bordered w-full"
              />
            </label> */}
            {/* nama bisnis */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Nama Busnines</span>
              </div>
              {form.formState.errors?.nameBisnis && (
                <p className="text-xs text-red-500 mb-2">{form.formState?.errors.nameBisnis.message}</p>
              )}
              <input
                {...form.register('nameBisnis')}
                type="text"
                name="nameBisnis"
                className="input input-bordered flex items-center gap-2 grow placeholder:text-sm"
                placeholder="Nama Bisnis Anda"
              />
            </label>
            {/* username */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Username</span>
              </div>
              {form.formState.errors?.username && (
                <p className="text-xs text-red-500 mb-2">{form.formState?.errors.username.message}</p>
              )}
              <input
                {...form.register('username')}
                type="text"
                name="username"
                className="input input-bordered flex items-center gap-2 grow placeholder:text-sm"
                placeholder="Nama Anda"
              />
            </label>
            {/* contact */}
            <div className="label">
              <span className="label-text">Contact</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                {/* instagram */}
                <label className="input input-bordered flex items-center gap-2">
                  <RiInstagramFill />
                  <input
                    {...form.register('instagram')}
                    type="text"
                    name="instagram"
                    className="grow placeholder:text-sm"
                    placeholder="Instagram"
                  />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                  <input
                    {...form.register('urlInstagram')}
                    type="url"
                    name="urlInstagram"
                    className="grow placeholder:text-sm"
                    placeholder="URL Instagram"
                  />
                </label>
              </div>
              <div className="space-y-2">
                {/* tiktok */}
                <label className="input input-bordered flex items-center gap-2">
                  <AiFillTikTok />
                  <input
                    {...form.register('tiktok')}
                    type="text"
                    name="tiktok"
                    className="grow placeholder:text-sm"
                    placeholder="Tiktok"
                  />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                  <input
                    {...form.register('urlTiktok')}
                    type="url"
                    name="urlTiktok"
                    className="grow placeholder:text-sm"
                    placeholder="URL Tiktok"
                  />
                </label>
              </div>
              <div className="space-y-2">
                {/* facebook */}
                <label className="input input-bordered flex items-center gap-2">
                  <FaFacebook />
                  <input
                    {...form.register('facebook')}
                    type="text"
                    name="facebook"
                    className="grow placeholder:text-sm"
                    placeholder="Facebook"
                  />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                  <input
                    {...form.register('urlFacebook')}
                    type="url"
                    name="urlFacebook"
                    className="grow placeholder:text-sm"
                    placeholder="URL Facebook"
                  />
                </label>
              </div>
              <div className="space-y-2">
                {/* shopee */}
                <label className="input input-bordered flex items-center gap-2">
                  <SiShopee />
                  <input
                    {...form.register('shopee')}
                    type="text"
                    name="shopee"
                    className="grow placeholder:text-sm"
                    placeholder="Shopee"
                  />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                  <input
                    {...form.register('urlShopee')}
                    type="url"
                    name="urlShopee"
                    className="grow placeholder:text-sm"
                    placeholder="URL Shopee"
                  />
                </label>
              </div>
              <div className="space-y-2">
                {/* tokopedia */}
                <label className="input input-bordered flex items-center gap-2">
                  <div>
                    <Image src={Tokopedia} width={15} height={15} alt="tokopedia" />
                  </div>
                  <input
                    {...form.register('tokopedia')}
                    type="text"
                    name="tokopedia"
                    className="grow placeholder:text-sm"
                    placeholder="Tokopedia"
                  />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                  <input
                    {...form.register('urlTokopedia')}
                    type="url"
                    name="urlTokopedia"
                    className="grow placeholder:text-sm"
                    placeholder="URL Tokopedia"
                  />
                </label>
              </div>
              <div className="space-y-2">
                {/* lazada */}
                <label className="input input-bordered flex items-center gap-2">
                  <div>
                    <Image src={Lazada} width={15} height={15} alt="lazada" />
                  </div>
                  <input
                    {...form.register('lazada')}
                    type="text"
                    name="lazada"
                    className="grow placeholder:text-sm"
                    placeholder="Lazada"
                  />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                  <input
                    {...form.register('urlLazada')}
                    type="url"
                    name="urlLazada"
                    className="grow placeholder:text-sm"
                    placeholder="URL Lazada"
                  />
                </label>
              </div>
              <div className="space-y-2">
                {/* wa */}
                <label className="input input-bordered flex items-center gap-2">
                  <IoLogoWhatsapp />
                  <input
                    {...form.register('whatsapp')}
                    type="number"
                    name="whatsapp"
                    className="grow placeholder:text-sm"
                    placeholder="Whatsapp"
                  />
                </label>
                {/* phone */}
                <label className="input input-bordered flex items-center gap-2">
                  <FaPhoneAlt />
                  <input
                    {...form.register('phone')}
                    type="number"
                    name="phone"
                    className="grow placeholder:text-sm"
                    placeholder="Telephone"
                  />
                </label>
              </div>
            </div>
            {/* lokasi */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Lokasi</span>
              </div>
              <div className="space-y-2">
                {/* google maps */}
                <div className="input input-bordered flex items-center gap-2">
                  <FaMapMarkerAlt />
                  <input
                    {...form.register('googleMaps')}
                    type="url"
                    name="googleMaps"
                    className="grow placeholder:text-sm"
                    placeholder="URL google maps"
                  />
                </div>
                {/* alamat */}
                {form.formState.errors?.alamat && (
                  <p className="text-xs text-red-500 mb-2">{form.formState?.errors.alamat.message}</p>
                )}
                <div className="input input-bordered flex items-center gap-2">
                  <FaRoad />
                  <input
                    {...form.register('alamat')}
                    type="text"
                    name="alamat"
                    className="grow placeholder:text-sm"
                    placeholder="Nama Jalan"
                  />
                </div>
              </div>
            </label>
            {/* description */}
            <label className="form-control">
              <div className="label">
                <span className="label-text">Description Bisnis Anda</span>
              </div>
              <textarea
                {...form.register('description')}
                name="description"
                className="textarea textarea-bordered h-32 text-base"
                placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, inventore!"
              />
            </label>
            <div className="flex justify-end w-full">
              <button
                type="submit"
                disabled={loading}
                className="btn mt-2 bg-primary-color hover:bg-primary-color/80 text-white disabled:cursor-no-drop w-full"
              >
                {loading ? 'Loading...' : 'Update Busines'}
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
