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

export async function getAllBisnis() {
  return await prisma.business.findMany();
}

export async function getBusinesById(id: string) {
  const busines = await prisma.business.findUnique({
    where: { id },
  });

  if (!busines) throw new Error('Tidak ada busines');

  return busines;
}

export async function getAllUsers() {
  return await prisma.user.findMany();
}
