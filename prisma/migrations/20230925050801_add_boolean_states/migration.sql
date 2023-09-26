-- AlterTable
ALTER TABLE "Dailyreport" ADD COLUMN     "isApproved" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isComplete" BOOLEAN NOT NULL DEFAULT false;
