-- AddForeignKey
ALTER TABLE "InferenceReport" ADD CONSTRAINT "InferenceReport_dailyReportId_fkey" FOREIGN KEY ("dailyReportId") REFERENCES "Dailyreport"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
