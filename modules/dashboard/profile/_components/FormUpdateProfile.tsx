'use client';

import { FormEvent, useRef, useState } from 'react';
import LabelInput from '@/components/ui/LabelInput';
import LabelTextArea from '@/components/ui/LabelTextArea';
import { userServices } from '@/services/users';
import { usePathname, useRouter } from 'next/navigation';
import { User } from '@prisma/client';
import { updateUserDataValidation } from '@/validations/user-validation';

type PropsTypes = {
  user: User | null;
};

type FormValue = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  alamat: string;
};

export default function FormUpdateProfile({ user }: PropsTypes) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const pathname = usePathname();
  console.log(pathname);

  const router = useRouter();
  const id = user?.id;

  // Initialize state with user data or defaults
  const [formValue, setFormValue] = useState<FormValue>(() => ({
    firstName: user?.name ?? '',
    lastName: '',
    email: user?.email ?? '',
    phone: user?.phone ?? '',
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

  // Handle form submission
  const handleUserUpdate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target as HTMLFormElement;
    const data = {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      email: form.email.value,
      phone: form.phone.value,
      alamat: form.alamat.value,
    };

    console.log(data);

    const validateFields = updateUserDataValidation.safeParse(data);
    console.log(validateFields);

    if (!validateFields.success) {
      setLoading(false);
      setMessage(String(validateFields.error.flatten().fieldErrors));
    } else {
      const dataUpdate = {
        ...data,
        id,
      };
      try {
        const result = await userServices.updateUserProfile(JSON.stringify(dataUpdate));
        console.log(result);
        if (result.status) {
          setLoading(false);
          router.replace('/dashboard/profile');
        } else {
          setLoading(false);
          setMessage('Gagal fetch update data');
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
        setMessage('Gagal update data');
      }
    }
  };

  return (
    <form onSubmit={handleUserUpdate} className="w-full pb-8">
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
            value={formValue.phone}
            name="phone"
            label="Phone"
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
              disabled={loading}
              className="btn mt-2 bg-primary-color hover:bg-primary-color/80 text-white disabled:cursor-no-drop w-full"
            >
              {loading ? 'Loading...' : 'Update'}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
