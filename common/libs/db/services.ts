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

export const getBisnisByEmail = async (email: string) => {
  const bisnis = await prisma.business.findMany({
    where: { user: email },
  });

  if (!bisnis) throw new Error('Unauthenticated');

  return bisnis;
};

export const getBisnisByEmailUniq = async (id: string) => {
  // Kemudian, cari bisnis berdasarkan userId dari pengguna yang ditemukan
  const bisnis = await prisma.business.findUnique({
    where: { id },
  });
  console.log(bisnis);

  if (!bisnis) throw new Error('Unauthenticated');

  return bisnis;
};
