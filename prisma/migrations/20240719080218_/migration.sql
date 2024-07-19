-- DropForeignKey
ALTER TABLE "Employee" DROP CONSTRAINT "Employee_depId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_empId_fkey";

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_empId_fkey" FOREIGN KEY ("empId") REFERENCES "Employee"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_depId_fkey" FOREIGN KEY ("depId") REFERENCES "Department"("id") ON DELETE CASCADE ON UPDATE CASCADE;
