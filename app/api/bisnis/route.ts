import prisma from '@/common/libs/db/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    console.log('Received POST request');

    const res = await req.json();
    console.log('Parsed request data:', res);

    const result = await prisma.business.create({ data: res });

    console.log('Database operation result:', result);

    return NextResponse.json({ res });
  } catch (error: any) {
    console.error('Error occurred:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
