'use client';

import { Business } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillTikTok } from 'react-icons/ai';

import { dmSans } from '@/common/assets/font/font';

import { FaFacebook, FaMapMarkerAlt, FaRoad } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import { RiInstagramFill } from 'react-icons/ri';
import { FaPhone } from 'react-icons/fa6';
import { updateProfileBisnisValidation } from '@/validations/bisnis-validation';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { updateProfileBisnis } from '@/common/libs/firebase/services';
import { bisnisServices } from '@/services/bisnis';
import { useRouter } from 'next/navigation';
import { Toast } from './profile';

type PropsTypes = {
  bisnis: Business | null;
  phone: string;
  setToast: Dispatch<SetStateAction<any>>;
  toast: Toast;
};

type callbackUpdateBisnis = {
  status: boolean;
  urlImage: string;
};

export default function BisnisProfile({ bisnis, phone, toast, setToast }: PropsTypes) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const formProfileRef = useRef<HTMLFormElement>(null);

  const { refresh } = useRouter();

  const handleUpdateProfileBisnis = (e: any) => {
    e.preventDefault();
    setLoading(true);
    const file = e.target[0]?.files[0];

    const validateFields = updateProfileBisnisValidation.safeParse({ profileBisnis: file });
    console.log(validateFields);

    if (!validateFields.success) {
      setLoading(false);
      setToast({
        variant: 'alert-info',
        message: String(validateFields.error.flatten().fieldErrors.profileBisnis),
      });
    } else {
      const { profileBisnis } = validateFields.data;

      updateProfileBisnis(
        bisnis?.id as string,
        profileBisnis,
        async ({ status, urlImage }: callbackUpdateBisnis) => {
          if (status) {
            const data = { image: urlImage, id: bisnis?.id };
            const result = await bisnisServices.updateBisnis(JSON.stringify(data), bisnis?.id as string);
            console.log(result);
            if (result.status) {
              refresh();
              setLoading(false);
              if (formProfileRef.current) formProfileRef.current.reset();
              setToast({
                variant: 'alert-info',
                message: 'Berhasil update profile',
              });
            } else {
              setLoading(false);
              if (formProfileRef.current) formProfileRef.current.reset();
            }
          } else {
            setLoading(false);
            if (formProfileRef.current) formProfileRef.current.reset();
            setMessage('Gagal Update Profile');
          }
        }
      );
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
    <div className="w-full flex flex-col gap-4">
      <form
        ref={formProfileRef}
        onSubmit={handleUpdateProfileBisnis}
        className="w-full p-6 rounded-md flex flex-col gap-4 justify-center items-center border border-slate-400/30 shadow-sm"
      >
        <div className="overflow-hidden w-44 aspect-[1/1] rounded-full transition-all cursor-pointer">
          <Image
            src={bisnis?.imageBisnis as string}
            alt="imahe-bisnis"
            width={100}
            height={100}
            className="w-full h-full object-cover"
          />
        </div>
        <label className="flex flex-col gap-4 w-full cursor-pointer appearance-none items-center justify-center rounded-md border-2 border-dashed border-gray-200 p-4 transition-all hover:border-primary-300 bg-[#eee]">
          <div className="space-y-1 text-center mt-2">
            <div className="text-gray-600">
              <a href="#" className="font-medium text-primary-500 hover:text-primary-700">
                Click to upload
              </a>{' '}
              or drag and drop
            </div>
            <p className="text-sm text-gray-500">PNG, JPG (max size 2MB)</p>
          </div>
          <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
        </label>
        <button
          disabled={loading}
          type="submit"
          className="btn w-full bg-primary-color text-white disabled:bg-slate-500"
        >
          {loading ? 'Loading...' : 'Update Profile Bisnis'}
        </button>
      </form>
      <div className="text-left">
        <h1 className="text-xl font-bold">{bisnis?.nameBisnis}</h1>
        <pre className={`text-sm mt-1 font-mono ${dmSans.className}`}>{bisnis?.keterangan}</pre>
        <p className="text-sm mt-4 font-bold text-primary-color">Lokasi</p>
        <p className="flex items-center gap-1 text-sm mt-2">
          <FaMapMarkerAlt />{' '}
          {bisnis?.lokasiGoogleMaps ? (
            <Link
              href={bisnis?.lokasiGoogleMaps as string}
              className="hover:underline hover:text-primary-color"
            >
              google maps
            </Link>
          ) : (
            '-'
          )}
        </p>
        <p className="flex items-center gap-1 text-sm mt-2">
          <FaRoad /> {bisnis?.lokasiNamaJalan ? `${bisnis.lokasiNamaJalan}` : '-'}
        </p>
        <p className="text-sm mt-4 font-bold text-primary-color">Contact</p>
        <ul className="flex flex-col gap-2 mt-2 text-sm">
          <li className="flex items-center gap-1">
            <IoLogoWhatsapp /> {bisnis?.whatsapp ? bisnis.whatsapp : '-'}
          </li>
          <li className="flex items-center gap-1">
            <FaPhone /> {phone ? phone : '-'}
          </li>
          <li className=" flex items-center gap-1">
            <RiInstagramFill />
            {bisnis?.instagram ? (
              <Link
                href={bisnis?.urlInstagram as string}
                className="hover:underline hover:text-primary-color"
              >
                {bisnis?.instagram}
              </Link>
            ) : (
              '-'
            )}
          </li>
          <li className=" flex items-center gap-1">
            <AiFillTikTok />
            {bisnis?.tiktok ? (
              <Link
                href={bisnis?.urlTiktok as string}
                className="hover:underline hover:text-primary-color"
              >
                {bisnis?.tiktok}
              </Link>
            ) : (
              '-'
            )}
          </li>
          <li className=" flex items-center gap-1">
            <FaFacebook />
            {bisnis?.facebook ? (
              <Link
                href={bisnis?.urlFacebook as string}
                className="hover:underline hover:text-primary-color"
              >
                {bisnis?.facebook}
              </Link>
            ) : (
              '-'
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
