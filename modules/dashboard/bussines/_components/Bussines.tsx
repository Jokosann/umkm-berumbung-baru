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
import { createBisnisValidation } from '@/validations/bisnis-validation';
import { bisnisServices } from '@/services/bisnis';
import { createBisnis } from '@/common/libs/firebase/services';
import { User } from '@prisma/client';

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

export default function Bussines({ user }: { user: User }) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const router = useRouter();

  // Initialize state with user data or defaults
  const [formValue, setFormValue] = useState<FormValue>(() => ({
    nameBisnis: '',
    whatsapp: '',
    instagram: '',
    urlInstagram: '',
    tiktok: '',
    urlTiktok: '',
    facebook: '',
    urlFacebook: '',
    lokasiGoogleMaps: '',
    lokasiNamaJalan: '',
    keterangan: '',
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
  const handleUserUpdate = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const file = e.target[0]?.files[0];

    const form = e.target as HTMLFormElement;

    const data = {
      imageBisnis: file,
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

    const validateFields = createBisnisValidation.safeParse(data);

    console.log(validateFields);

    if (!validateFields.success) {
      setLoading(false);
      setMessage(String(validateFields.error.flatten().fieldErrors));
    } else {
      createBisnis(user.id, validateFields.data.imageBisnis, async ({ status, urlImage }: any) => {
        if (status) {
          const dataBisnis = {
            ...data,
            telepon: user?.phone ?? '',
            imageBisnis: urlImage,
            userId: user?.id,
            user: user?.email,
          };

          console.log(dataBisnis);

          try {
            const result = await bisnisServices.createBisnis(JSON.stringify(dataBisnis));

            console.log(result);

            if (result.status) {
              setLoading(false);
              router.refresh();
            } else {
              setLoading(false);
              setMessage('Gagal fetch update data');
            }
          } catch (error) {
            setLoading(false);
            console.log(error);
          }
        } else {
          setLoading(false);
        }
      });
    }
  };

  return (
    <div className="px-6 mt-20 sm:mt-24 md:mt-20 max-w-3xl mx-auto pt-2">
      <h1 className="text-center text-2xl font-bold text-primary-color">Buat Bisnis Anda</h1>
      <form onSubmit={handleUserUpdate} className="w-full pb-8">
        <div className="grid">
          <div className="items-center mt-4 text-primary-color space-y-2">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Foto Bisnis</span>
              </div>
              <input type="file" className="file-input file-input-bordered w-full" />
            </label>
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
                {loading ? 'Loading...' : 'Buat Bisnis'}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
