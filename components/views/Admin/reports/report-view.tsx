'use client';
import React from 'react';
import {DailyReport} from "@/config/interfaces";
import {Divider} from "@nextui-org/divider";
import {ReportUserTable} from "@/components/views/Admin/reports/report-user-table";
import {ReportActivityTable} from "@/components/views/Admin/reports/report-activity-table";
import {ReportInferenceTable} from "@/components/views/Admin/reports/report-inference-table";


interface Props {
    dailyReport: DailyReport;
}

export const ReportView: React.FC<Props> = ({dailyReport}) => {
    const getUserByRoleName = (roleNames: string[]) => {
        return dailyReport.ReportUser.find((reportUser) => {
            return roleNames.includes(reportUser.user.role?.name!);
        })
    }

    const getUserToReport = () => {
      return dailyReport.ReportUser.map((reportUser) => {
          return reportUser.user;
        });
    }

    const getUserToDailyReportAsistence = () => {
      return dailyReport.DailyreportAsistence.map((dailyReportAsistence) => {
          return dailyReportAsistence.user;
        });
    }
    return (
      <div className="flex flex-col items-left justify-left my-4 py-4">
        <div className="flex flex-row items-center justify-between w-full ">
          <h1 className="text-3xl font-bold mb-2 px-4">Reporte Diario: {dailyReport.name}</h1> {/* Aumentamos el tamaño del texto (text-3xl) y añadimos margen inferior (mb-2) */}
          <h2 className="text-xl font-bold px-4">Horas de buceo: {dailyReport.drivingHours}</h2>
        </div>
        <h2 className="text-xl font-bold px-4 text-center py-4">Ejecutor/Visador:</h2>
        <Divider />
        <ReportUserTable users={getUserToReport()} />
        <h2 className="text-xl font-bold px-4 text-center py-4">Personal:</h2>
        <Divider />
        <ReportUserTable users={getUserToDailyReportAsistence()} />
        <h2 className="text-xl font-bold px-4 text-center py-4">Actividades</h2>
        <Divider />
        <ReportActivityTable activities={dailyReport.ActivityReport} />
        <h2 className="text-xl font-bold px-4 text-center py-4">Inferencias:</h2>
        <Divider />
        <ReportInferenceTable inferences={dailyReport.InferenceReport} />
      </div>
    );
};
