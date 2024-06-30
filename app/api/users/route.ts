import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../common/libs/db/prisma';

export async function GET(req: NextRequest) {
  const users = await prisma.user.findMany();
  return NextResponse.json({ status: true, data: users });
}

export async function POST(req: NextRequest) {
  const res = await req.json();
  console.log(res);
  // const result = await uploadFile('123', res.profile);
  return NextResponse.json({ status: true, data: {} });
}
