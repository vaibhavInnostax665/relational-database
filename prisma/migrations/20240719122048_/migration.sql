/*
  Warnings:

  - You are about to drop the `Authentication` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Authentication";

-- CreateTable
CREATE TABLE "Authentic" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Authentic_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Authentic_username_key" ON "Authentic"("username");
