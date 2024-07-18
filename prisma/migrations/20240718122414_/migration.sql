-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_empId_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "empId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_empId_fkey" FOREIGN KEY ("empId") REFERENCES "Employee"("id") ON DELETE SET NULL ON UPDATE CASCADE;
