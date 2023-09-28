import { NextRequest, NextResponse } from "next/server";
import prisma from "../prismaClient";


export const POST = async (req: NextRequest, res: NextResponse) => {
    const { name, hourId, inferenceId, dailyReportId } = await req.json();

    const inferenceReport = await prisma.inferenceReport.create({
        data: {
            name: name,
            hour: {
                connect: {
                    id: hourId,
                },
            },
            inference: {
                connect: {
                    id: inferenceId,
                },
            },
            dailyReport: {
                connect: {
                    id: dailyReportId,
                },
            }
        }
    });

    return NextResponse.json(inferenceReport);
}

export const GET = async (req: NextRequest, res: NextResponse) => {
    const inferenceReports = await prisma.inferenceReport.findMany();
    return NextResponse.json(inferenceReports);
}
