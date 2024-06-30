import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { updateUserValidation } from '@/validations/user-validation';
import { storage } from './init';
import { revalidatePath } from 'next/cache';
import prisma from '../db/prisma';
import instance from '../axios/instance';

export function updateUserProfile(userId: string, formData: any, callback: Function) {
  console.log(formData);

  // const validateFields = updateUserValidation.safeParse(Object.fromEntries(formData.entries()));
  // console.log(validateFields);

  // if (!validateFields.success) return { error: validateFields.error.flatten().fieldErrors };

  // const { profile } = validateFields.data;

  const storageRef = ref(storage, `image/users/${userId}`);
  const uploadTask = uploadBytesResumable(storageRef, formData);

  uploadTask.on(
    'state_changed',
    async (snapshot) => {
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = ~~((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case 'paused':
          console.log('Upload is paused');
          break;
        case 'running':
          console.log('Upload is running');
          break;
      }
    },
    (error) => {
      // Handle unsuccessful uploads
      console.log(error.message);
    },
    async () => {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      const url = await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL);
        callback(downloadURL);
      });

      // const data = { url, userId };

      // // revalidatePath('/dashboard/profile');
      // try {
      //   const result = await instance.post('/api/users/profile', JSON.stringify(data));
      //   if (!result.status) {
      //     return { message: 'false' };
      //   } else {
      //     return { message: 'true' };
      //   }
      // } catch (error) {
      //   return { message: error };
      // }
    }
  );
}
