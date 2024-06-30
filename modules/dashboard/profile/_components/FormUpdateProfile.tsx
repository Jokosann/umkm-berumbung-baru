'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import LabelInput from '@/components/ui/LabelInput';
import LabelTextArea from '@/components/ui/LabelTextArea';
import DeleteSvg from '@/components/ui/svg/DeleteSvg';
import UploadSvg from '@/components/ui/svg/UploadSvg';
import { User } from '@prisma/client';
import { updateUserProfile } from '@/common/libs/firebase/services';
import instance from '@/common/libs/axios/instance';
import { userServices } from '@/services/users';
import { useFormState } from 'react-dom';

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
  // const [formState, formAction] = useFormState(updateUserProfile, null);

  // console.log(formState);

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
  const handleFileInputChange = async (e: any) => {
    e.preventDefault();
    // const { name } = e.target;
    const file = e.target[0]?.files[0];
    if (file) {
      // updateUserProfile(file);s
      // const imageUrl = URL.createObjectURL(file);
      // console.log(imageUrl);
      // setFormValue((prev) => ({
      //   ...prev,
      //   [name]: imageUrl,
      // }));
    }
  };

  // Handle form submission
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // const data = FormData.get('profile') as File;
    // const data = {
    //   profile: FormData.get('profile') as File,
    //   firstName: FormData.get('firstName') as string,
    //   lastName: FormData.get('lastName') as string,
    //   email: formValue.email,
    //   contact: FormData.get('contact') as string,
    // };

    const profile = e.target.value;
    console.log(profile);
    // Implement your logic for submitting the updated profile
    // Example: Call an API to update the user profile with formValue data

    // try {
    //   updateUserProfile(profile);
    // } catch (error) {}
  };

  return (
    <div className="w-full pb-8">
      <div className="grid">
        <div className="items-center mt-4 text-primary-color space-y-2">
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
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
