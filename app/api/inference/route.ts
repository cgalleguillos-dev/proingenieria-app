
import { NextRequest, NextResponse } from "next/server";
import prisma from "../prismaClient";


export const POST = async (req: NextRequest, res: NextResponse) => {
  const { name, inferenceTypeId } = await req.json();

  const inference = await prisma.inference.create({
    data: {
      name: name,
      inferenceType: {
        connect: {
          id: inferenceTypeId,
        },
      }
    },
  });
  return NextResponse.json(inference);
}

export const GET = async (req: NextRequest, res: NextResponse) => {
  const inferences = await prisma.inference.findMany({
    include: {
      inferenceType: true,
    }
  });
  return NextResponse.json(inferences);
}