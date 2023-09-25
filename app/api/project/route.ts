import { NextResponse, NextRequest } from "next/server";
import prisma from "@/app/api/prismaClient";

export const POST = async (req: NextRequest, res: NextResponse) => {
  const {name} = await req.json();
  const project = await prisma.project.create({
    data: {
      name: name,
    },

  });
  return NextResponse.json(project);
}

export const GET = async (req: NextRequest, res: NextResponse) => {
  const projects = await prisma.project.findMany();
  return NextResponse.json(projects);
}