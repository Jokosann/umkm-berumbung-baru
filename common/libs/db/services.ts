import prisma from './prisma';
import { User } from 'next-auth';
import { AdapterUser } from 'next-auth/adapters';

export const loginWithGoogle = async (user: User | AdapterUser) => {
  const isUser = await prisma.user.findUnique({
    where: { email: user.email! },
  });

  if (isUser) {
    return isUser;
  } else {
    const newUser = await prisma.user.create({
      data: {
        name: user.name!,
        email: user.email!,
        image: user.image!,
      },
    });

    return newUser;
  }
};

export const getUserById = async (id: string) => {
  const user = await prisma.user.findUnique({
    where: { id },
  });

  if (!user) throw new Error('Unauthenticated');

  return user;
};
