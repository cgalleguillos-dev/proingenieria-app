import { NextResponse, NextRequest } from "next/server";
import prisma from "@/app/api/prismaClient";

export const POST = async (req: NextRequest, res: NextResponse) => {
  const {name} = await req.json();
  const role = await prisma.role.create({
    data: {
      name: name,
    },

  });
  return NextResponse.json(role);
};

export const GET = async (req: NextRequest, res: NextResponse) => {
  const roles = await prisma.role.findMany();
  return NextResponse.json(roles);
}