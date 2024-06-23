import { userLoginValidation } from '@/validations/user-validation';
import { signIn } from 'next-auth/react';

export const loginUser = async (prevState: unknown, formData: FormData) => {
  const validateFields = userLoginValidation.safeParse(Object.fromEntries(formData.entries()));
  if (!validateFields.success) return { error: validateFields.error.flatten().fieldErrors };

  const { email, password } = validateFields.data;

  try {
    await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    return { message: 'success' };
  } catch (error) {
    return { messages: error };
  }
};
