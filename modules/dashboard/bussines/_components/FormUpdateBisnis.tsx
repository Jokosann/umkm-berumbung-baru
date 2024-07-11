'use client';

import LabelInput from '@/components/ui/LabelInput';
import LabelSelect from '@/components/ui/LabelSelect';
import LabelTextArea from '@/components/ui/LabelTextArea';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { IoLogoWhatsapp } from 'react-icons/io';
import { RiInstagramFill } from 'react-icons/ri';
import { AiFillTikTok } from 'react-icons/ai';
import { FaFacebook, FaMapMarkerAlt, FaRoad } from 'react-icons/fa';
import { createBisnisValidation, updateBisnisValidation } from '@/validations/bisnis-validation';
import { bisnisServices } from '@/services/bisnis';
import { createBisnis } from '@/common/libs/firebase/services';
import { Business, User } from '@prisma/client';

type FormValue = {
  nameBisnis: string;
  whatsapp: string;
  instagram: string;
  urlInstagram: string;
  tiktok: string;
  urlTiktok: string;
  facebook: string;
  urlFacebook: string;
  lokasiGoogleMaps: string;
  lokasiNamaJalan: string;
  keterangan: string;
};

export default function Bussines({ bisnis }: { bisnis: Business }) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const router = useRouter();

  // Initialize state with user data or defaults
  const [formValue, setFormValue] = useState<FormValue>(() => ({
    nameBisnis: bisnis.nameBisnis ?? '',
    whatsapp: bisnis.whatsapp ?? '',
    instagram: bisnis.instagram ?? '',
    urlInstagram: bisnis.urlInstagram ?? '',
    tiktok: bisnis.tiktok ?? '',
    urlTiktok: bisnis.urlTiktok ?? '',
    facebook: bisnis.facebook ?? '',
    urlFacebook: bisnis.urlFacebook ?? '',
    lokasiGoogleMaps: bisnis.lokasiGoogleMaps ?? '',
    lokasiNamaJalan: bisnis.lokasiNamaJalan ?? '',
    keterangan: bisnis.keterangan ?? '',
  }));

  // Handle input change for form fields
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleBisnisUpdate = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const form = e.target as HTMLFormElement;

    const data = {
      nameBisnis: form.nameBisnis.value,
      whatsapp: form.whatsapp.value,
      instagram: form.instagram.value,
      urlInstagram: form.urlInstagram.value,
      tiktok: form.tiktok.value,
      urlTiktok: form.urlTiktok.value,
      facebook: form.facebook.value,
      urlFacebook: form.urlFacebook.value,
      lokasiGoogleMaps: form.lokasiGoogleMaps.value,
      lokasiNamaJalan: form.lokasiNamaJalan.value,
      keterangan: form.keterangan.value,
    };

    console.log(data);

    const validateFields = updateBisnisValidation.safeParse(data);

    console.log(validateFields);

    if (!validateFields.success) {
      setLoading(false);
      setMessage(String(validateFields.error.flatten().fieldErrors.nameBisnis));
    } else {
      console.log(validateFields.data);
      try {
        const result = await bisnisServices.updateBisnis(JSON.stringify(validateFields.data), bisnis.id);
        console.log(result);
        if (result.status) {
          setLoading(false);
          router.replace('/dashboard/profile');
        } else {
          setLoading(false);
          setMessage('Gagal fetch update bisnis');
        }
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }
  };

  return (
    <>
      <form onSubmit={handleBisnisUpdate} className="w-full pb-8">
        {message && <span className="text-xs text-red-500">{message}</span>}
        <div className="grid">
          <div className="items-center mt-4 text-primary-color space-y-2">
            <LabelInput
              onChange={handleInputChange}
              value={formValue.nameBisnis}
              name="nameBisnis"
              label="Name Bussines"
              type="text"
              placeholder="Warung Makan - bengkel"
            />
            <div className="label">
              <span className="label-text">Contact</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="input input-bordered flex items-center gap-2">
                  <RiInstagramFill />
                  <input
                    onChange={handleInputChange}
                    value={formValue.instagram}
                    type="text"
                    name="instagram"
                    className="grow placeholder:text-sm"
                    placeholder="Instagram"
                  />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                  <input
                    onChange={handleInputChange}
                    value={formValue.urlInstagram}
                    type="url"
                    name="urlInstagram"
                    className="grow placeholder:text-sm"
                    placeholder="URL Instagram"
                  />
                </label>
              </div>
              <div className="space-y-2">
                <label className="input input-bordered flex items-center gap-2">
                  <AiFillTikTok />
                  <input
                    onChange={handleInputChange}
                    value={formValue.tiktok}
                    type="text"
                    name="tiktok"
                    className="grow placeholder:text-sm"
                    placeholder="Tiktok"
                  />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                  <input
                    onChange={handleInputChange}
                    value={formValue.urlTiktok}
                    type="url"
                    name="urlTiktok"
                    className="grow placeholder:text-sm"
                    placeholder="URL Tiktok"
                  />
                </label>
              </div>
              <div className="space-y-2">
                <label className="input input-bordered flex items-center gap-2">
                  <FaFacebook />
                  <input
                    onChange={handleInputChange}
                    value={formValue.facebook}
                    type="text"
                    name="facebook"
                    className="grow placeholder:text-sm"
                    placeholder="Facebook"
                  />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                  <input
                    onChange={handleInputChange}
                    value={formValue.urlFacebook}
                    type="url"
                    name="urlFacebook"
                    className="grow placeholder:text-sm"
                    placeholder="URL Facebook"
                  />
                </label>
              </div>
              <label className="input input-bordered flex items-center gap-2">
                <IoLogoWhatsapp />
                <input
                  onChange={handleInputChange}
                  value={formValue.whatsapp}
                  type="number"
                  name="whatsapp"
                  className="grow placeholder:text-sm"
                  placeholder="No Whatsapp"
                />
              </label>
            </div>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Lokasi</span>
              </div>
              <div className="space-y-2">
                <div className="input input-bordered flex items-center gap-2">
                  <FaMapMarkerAlt />
                  <input
                    onChange={handleInputChange}
                    value={formValue.lokasiGoogleMaps}
                    type="url"
                    name="lokasiGoogleMaps"
                    className="grow placeholder:text-sm"
                    placeholder="URL google maps"
                  />
                </div>
                <div className="input input-bordered flex items-center gap-2">
                  <FaRoad />
                  <input
                    onChange={handleInputChange}
                    value={formValue.lokasiNamaJalan}
                    type="text"
                    name="lokasiNamaJalan"
                    className="grow placeholder:text-sm"
                    placeholder="Nama Jalan"
                  />
                </div>
              </div>
            </label>
            <LabelTextArea
              value={formValue.keterangan}
              onChange={handleInputChange}
              name="keterangan"
              label="Keterangan Bisnis Anda"
              placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, inventore!"
            />
            <div className="flex justify-end w-full">
              <button
                type="submit"
                disabled={loading}
                className="btn mt-2 bg-primary-color hover:bg-primary-color/80 text-white disabled:cursor-no-drop w-full"
              >
                {loading ? 'Loading...' : 'Update Bisnis'}
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
