/*
  Warnings:

  - Added the required column `email` to the `Authentication` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Authentication" ADD COLUMN     "email" TEXT NOT NULL;
