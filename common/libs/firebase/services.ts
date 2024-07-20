import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from './init';

export async function updateUserProfile(userId: string, profile: File, callback: Function) {
  try {
    // Create a storage reference
    const storageRef = ref(storage, `image/users/${userId}`);
    const uploadTask = uploadBytesResumable(storageRef, profile);

    // Monitor the upload process
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = Math.floor((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        console.log(`Upload is ${progress}% done`);
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
        console.error('Upload failed:', error.message);
        callback({ status: false, message: 'Failed upload' });
      },
      async () => {
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          console.log('File available at', downloadURL);
          callback({ status: true, message: 'success update profile', urlImage: downloadURL });
        } catch (error: any) {
          console.error('Failed to get download URL:', error.message);
          callback({ status: false, message: 'Failed to get URL' });
        }
      }
    );
  } catch (error: any) {
    console.error('Error update profile:', error.message);
    callback({ status: false, message: 'Failed update Profile' });
  }
}

export async function createProfileBusines(id: string, imageBisnis: File, callback: Function) {
  try {
    // Create a storage reference
    const storageRef = ref(storage, `image/business/${id}`);
    const uploadTask = uploadBytesResumable(storageRef, imageBisnis);

    // Monitor the upload process
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = Math.floor((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        console.log(`Upload is ${progress}% done`);
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
        console.error('Upload failed:', error.message);
        callback({ status: false, message: 'Failed upload' });
      },
      async () => {
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          console.log('File available at', downloadURL);
          callback({ status: true, message: 'success update profile', urlImage: downloadURL });
        } catch (error: any) {
          console.error('Failed to get download URL:', error.message);
          callback({ status: false, message: 'Failed to get URL' });
        }
      }
    );
  } catch (error: any) {
    console.error('Error update profile:', error.message);
    callback({ status: false, message: 'Failed update Profile' });
  }
}

export const deleteProfileBusines = (id: string, callback: Function) => {
  // Create a reference to the file to delete
  const desertRef = ref(storage, `image/business/${id}`);

  console.log(desertRef);

  // Delete the file
  deleteObject(desertRef)
    .then(() => {
      // File deleted successfully
      callback(true);
    })
    .catch((error) => {
      // Uh-oh, an error occurred!
      console.log(error);
      callback(false);
    });
};

export async function updateProfileBisnis(userId: string, profileBisnis: File, callback: Function) {
  try {
    // Create a storage reference
    const storageRef = ref(storage, `image/bisniss/${userId}`);
    const uploadTask = uploadBytesResumable(storageRef, profileBisnis);

    // Monitor the upload process
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = Math.floor((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        console.log(`Upload is ${progress}% done`);
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
        console.error('Upload failed:', error.message);
        callback({ status: false, message: 'Failed upload' });
      },
      async () => {
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          console.log('File available at', downloadURL);
          callback({ status: true, message: 'success update profile', urlImage: downloadURL });
        } catch (error: any) {
          console.error('Failed to get download URL:', error.message);
          callback({ status: false, message: 'Failed to get URL' });
        }
      }
    );
  } catch (error: any) {
    console.error('Error update profile:', error.message);
    callback({ status: false, message: 'Failed update Profile' });
  }
}
