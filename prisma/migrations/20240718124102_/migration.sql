-- DropForeignKey
ALTER TABLE "Employee" DROP CONSTRAINT "Employee_depId_fkey";

-- AlterTable
ALTER TABLE "Employee" ALTER COLUMN "depId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_depId_fkey" FOREIGN KEY ("depId") REFERENCES "Department"("id") ON DELETE SET NULL ON UPDATE CASCADE;
