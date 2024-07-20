import prisma from '@/common/libs/db/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const res = await req.json();
    console.log('Parsed request data:', res);

    if (res.profileBisnis) {
      const result = await prisma.business.update({
        where: { id: params.id },
        data: { profileBisnis: res.profileBisnis },
      });
      console.log('Database update image result:', result);

      return NextResponse.json({ result });
    } else {
      const result = await prisma.business.update({ where: { id: params.id }, data: res });

      console.log('Database update data result:', result);

      return NextResponse.json({ result });
    }
  } catch (error: any) {
    console.error('Error occurred:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
