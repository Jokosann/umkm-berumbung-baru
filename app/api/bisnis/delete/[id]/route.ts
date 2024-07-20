import prisma from '@/common/libs/db/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  console.log(params.id);

  try {
    const result = await prisma.business.delete({ where: { id: params.id } });
    if (!result) return NextResponse.json({ error: 'tidal ada database' });
    return NextResponse.json({ result });
  } catch (error: any) {
    console.error('Error occurred:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
