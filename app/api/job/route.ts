import { NextResponse, NextRequest } from "next/server";
import prisma from "@/app/api/prismaClient";

export const POST = async (req: NextRequest, res: NextResponse) => {
  const {name} = await req.json();
  const job = await prisma.job.create({
    data: {
      name: name,
    },
  });
  return NextResponse.json(job);
};

export const GET = async (req: NextRequest, res: NextResponse) => {
  const jobs = await prisma.job.findMany();
  return NextResponse.json(jobs);
}