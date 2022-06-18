/*
  Warnings:

  - Added the required column `userId` to the `CardItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CardItem" ADD COLUMN     "userId" INTEGER NOT NULL;
