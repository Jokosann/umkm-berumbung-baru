import prisma from '@/common/libs/db/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const res = await req.json();

  const ImageUpdated = await prisma.user.update({
    where: { id: res.id },
    data: {
      image: res.image,
    },
  });

  return NextResponse.json({ status: true, data: ImageUpdated });
}
