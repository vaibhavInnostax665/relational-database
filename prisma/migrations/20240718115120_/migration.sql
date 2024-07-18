/*
  Warnings:

  - You are about to drop the column `package` on the `Employee` table. All the data in the column will be lost.
  - You are about to drop the column `address` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `userName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `userPhone` on the `User` table. All the data in the column will be lost.
  - Added the required column `salary` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Employee" DROP COLUMN "package",
ADD COLUMN     "salary" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "address",
DROP COLUMN "userName",
DROP COLUMN "userPhone",
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "phone" BIGINT;
