import { UserLogin } from '@/common/types/user-login';
import prisma from './prisma';

export const loginWithGoogle = async (data: UserLogin, callbacks: Function) => {
  const query = await prisma.user.findUnique({
    where: { email: data.email },
  });

  if (query) {
    callbacks({ status: true, messages: 'success login', data: query });
  } else {
    const newUser = await prisma.user.create({ data });

    callbacks({ status: true, messages: 'success create user', data: newUser });
  }
};
