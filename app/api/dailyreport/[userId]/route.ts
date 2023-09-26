import { NextResponse, NextRequest } from "next/server";
import prisma from "@/app/api/prismaClient";

export const GET = async (req: NextRequest, { params }: { params: { userId: string } }) => {
  const dailyReports = await prisma.dailyreport.findMany(
    {
      include: {
        project: true,
        ReportUser: {
          include: {
            user: true
          }
        }
      },
      where: {
        ReportUser: {
          some: {
            userId: params.userId
          }
        }
      }
    }
  );
  return NextResponse.json(dailyReports);

}