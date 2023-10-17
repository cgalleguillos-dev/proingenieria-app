import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/api/prismaClient";


export const POST = async (req: NextRequest, res: NextResponse) => {
  const { name } = await req.json();
  const inferenceType = await prisma.inferencetype.create({
    data: {
      name: name,
    },
  });
  return NextResponse.json(inferenceType);
}

export const GET = async (req: NextRequest, res: NextResponse) => {
  const inferenceTypes = await prisma.inferencetype.findMany();
  return NextResponse.json(inferenceTypes);
}