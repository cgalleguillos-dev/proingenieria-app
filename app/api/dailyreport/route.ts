import { NextResponse, NextRequest } from "next/server";
import prisma from "@/app/api/prismaClient";

export const POST = async (req: NextRequest, res: NextResponse) => {
  const {name, projectId, usersIds} = await req.json();

  const dailyReport = await prisma.dailyreport.create({
    data: {
      name: name,
      date: new Date(),
      projectId: projectId,
    },
  });

  for (const userId of usersIds) {
    await prisma.reportUser.create({
      data: {
        userId: userId,
        dailyReportId: dailyReport.id
      }
    });
  }
  return NextResponse.json(dailyReport);
}

export const GET = async (req: NextRequest, res: NextResponse) => {
  const dailyReports = await prisma.dailyreport.findMany(
    {
      include: {
        ReportUser: {
          include: {
            user: true
          }
        },
        ActivityReport: {
          include: {
            hour: true
          }
        },
        DailyreportAsistence: true,
        InferenceReport: true
      }
    }
  );
  return NextResponse.json(dailyReports);
}