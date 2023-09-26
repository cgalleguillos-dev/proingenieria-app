/*
  Warnings:

  - You are about to drop the column `title` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Project` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Job" DROP COLUMN "title";

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "title";
