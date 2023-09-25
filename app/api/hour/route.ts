import { NextResponse, NextRequest } from "next/server";
import prisma from "@/app/api/prismaClient";

export const POST = async (req: NextRequest, res: NextResponse) => {
  const {hour} = await req.json();
  const hourEntity = await prisma.hour.create({
    data: {
      hour: hour,
    }
  });
  return NextResponse.json(hourEntity);
};

export const GET = async (req: NextRequest, res: NextResponse) => {
  const hours = await prisma.hour.findMany();
  return NextResponse.json(hours);
}