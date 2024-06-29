'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import LabelInput from '@/components/ui/LabelInput';
import LabelTextArea from '@/components/ui/LabelTextArea';
import DeleteSvg from '@/components/ui/svg/DeleteSvg';
import UploadSvg from '@/components/ui/svg/UploadSvg';
import { User } from '@prisma/client';

type PropsTypes = {
  user: User | null;
};

type FormValue = {
  profile: string;
  firstName: string;
  lastName: string;
  email: string;
  contact: string;
  alamat: string;
};

export default function FormUpdateProfile({ user }: PropsTypes) {
  // Initialize state with user data or defaults
  const [formValue, setFormValue] = useState<FormValue>(() => ({
    profile: user?.image ?? '',
    firstName: user?.name ?? '',
    lastName: '',
    email: user?.email ?? '',
    contact: user?.contact ?? '',
    alamat: user?.alamat ?? '',
  }));

  // Handle input change for form fields
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle file input change for profile picture
  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormValue((prev) => ({
        ...prev,
        [name]: imageUrl,
      }));
    }
  };

  // Handle form submission
  const handleSubmit = (FormData: FormData) => {
    const form = {
      profile: FormData.get('profile') as string,
      firstName: FormData.get('firstName') as string,
      lastName: FormData.get('lastName') as string,
      email: formValue.email,
      contact: FormData.get('contact') as string,
    };

    console.log(form);
    // Implement your logic for submitting the updated profile
    // Example: Call an API to update the user profile with formValue data

    // setFormValue(() => ({
    //   profile: '',
    //   firstName: '',
    //   lastName: '',
    //   email: '',
    //   contact: '',
    //   alamat: '',
    // }));
  };

  return (
    <form action={handleSubmit} className="w-full px-2 pb-8">
      <div className="grid mt-6">
        <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
          <Image
            width={100}
            height={100}
            className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-primary-color"
            src={formValue.profile}
            alt="Bordered avatar"
          />

          <div className="flex flex-col space-y-5 sm:ml-8">
            <label
              htmlFor="uploadFile1"
              className="flex gap-2 justify-center items-center bg-primary-color hover:bg-primary-color/90 text-white text-sm font-medium px-5 py-3 outline-none rounded-lg w-full cursor-pointer active:scale-95 transition-all"
            >
              <UploadSvg />
              Update picture
              <input
                name="profile"
                type="file"
                id="uploadFile1"
                className="hidden"
                onChange={handleFileInputChange}
              />
            </label>

            <button
              type="button"
              className="flex gap-2 justify-center items-center text-sm font-medium px-5 py-3 outline-none rounded-lg w-full cursor-pointer active:scale-95 transition-all border border-red-500 text-red-500 bg-white"
            >
              <DeleteSvg />
              Delete picture
            </button>
          </div>
        </div>
        <div className="items-center mt-8 text-primary-color space-y-2">
          <div className="flex flex-col items-center w-full space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
            <LabelInput
              onChange={handleInputChange}
              value={formValue.firstName}
              name="firstName"
              label="Nama Depan"
              type="text"
              placeholder="Joko"
            />
            <LabelInput
              onChange={handleInputChange}
              value={formValue.lastName}
              name="lastName"
              label="Nama Belakang"
              type="text"
              placeholder="Santoso"
            />
          </div>
          <LabelInput
            value={formValue.email}
            name="email"
            label="Email"
            type="email"
            placeholder="example@gmail.com"
            disabled
          />
          <LabelInput
            value={formValue.contact}
            name="contact"
            label="Contact"
            type="number"
            placeholder="081234567890"
            onChange={handleInputChange}
          />
          <LabelTextArea
            value={formValue.alamat}
            onChange={handleInputChange}
            name="alamat"
            label="Alamat"
            placeholder="Jl. Murai No. 01, BERUMBUNG BARU, Kec. Dayun, Kab. Siak Prov. Riau"
          />
          <div className="flex justify-end">
            <button
              type="submit"
              className="btn mt-2 bg-primary-color hover:bg-primary-color/80 text-white"
            >
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
