/*
  Warnings:

  - Made the column `depId` on table `Employee` required. This step will fail if there are existing NULL values in that column.
  - Made the column `empId` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Employee" DROP CONSTRAINT "Employee_depId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_empId_fkey";

-- AlterTable
ALTER TABLE "Employee" ALTER COLUMN "depId" SET NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "empId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_empId_fkey" FOREIGN KEY ("empId") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_depId_fkey" FOREIGN KEY ("depId") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
