import { NextResponse, NextRequest } from "next/server";
import prisma from "@/app/api/prismaClient";
import {getToken} from "next-auth/jwt";
export const GET = async (req: NextRequest) => {
  const secret = process.env.NEXTAUTH_SECRET;
  const payload = await getToken({req, secret});
  if (!payload) {
    return NextResponse.json({error: "Unauthorized"}, {status: 401})
  }
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
            userId: payload?.sub
          }
        }
      }
    }
  );
  return NextResponse.json(dailyReports);
}