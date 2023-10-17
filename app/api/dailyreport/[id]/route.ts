import { NextResponse, NextRequest } from "next/server";
import prisma from "@/app/api/prismaClient";

export const PUT = async (req: NextRequest, { params }: { params: { id: string } }) => {
  const {activityReport, dailyReportAsistence, drivingHours, inferenceOutput} = await req.json();
  for (const activity of activityReport) {
    await prisma.activityReport.create({
      data: {
        hourId: activity.hourId,
        dailyReportId: params.id,
        name: activity.name
      }
    });
  }

  for (const userId of dailyReportAsistence) {
    await prisma.dailyreportAsistence.create({
      data: {
        dailyReportId: params.id,
        userId: userId
      }
    });
  }

  for (const inference of inferenceOutput) {
    await prisma.inferenceReport.create({
      data: {
        dailyReportId: params.id,
        inferenceId: inference.inferenceId,
        name: inference.name,
        hourId: inference.hourId,
      }
    });
  }

  await prisma.dailyreport.update({
    where: {
      id: params.id
    },
    data: {
      drivingHours: drivingHours,
      isComplete: true
    }
  });

  return NextResponse.json({message: "Reporte diario completado"});
};

export const GET = async (req: NextRequest, { params }: { params: { id: string } }) => {
const dailyReport = await prisma.dailyreport.findUnique({
    where: {
      id: params.id
    },
    include: {
      ReportUser: {
        include: {
          user: {
            include: {
              role: true,
              job: true
            }
          }
        }
      },
      ActivityReport: {
        include: {
          hour: true
        }
      },
      DailyreportAsistence: {
        include: {
          user: {
            include: {
              role: true,
              job: true
            }
          }
        }
      },
      InferenceReport:{
        include: {
          hour: true,
          inference: true
        }
      }
    }
  });
  return NextResponse.json(dailyReport);
}