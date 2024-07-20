import prisma from '@/common/libs/db/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const res = await req.json();

  if (res.image) {
    const ImageUpdated = await prisma.user.update({
      where: { id: res.id },
      data: {
        image: res.image,
      },
    });

    return NextResponse.json({ status: true, data: ImageUpdated });
  } else {
    const dataUserUpdate = await prisma.user.update({
      where: { id: res.id },
      data: {
        name: `${res.firstName} ${res.lastName || ''}`,
        alamat: res.alamat,
        phone: res.phone,
      },
    });

    return NextResponse.json({ status: true, data: dataUserUpdate });
  }
}
