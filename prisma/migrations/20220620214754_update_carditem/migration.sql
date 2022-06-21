/*
  Warnings:

  - The primary key for the `CardItem` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `userId` on the `CardItem` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CardItem" DROP CONSTRAINT "CardItem_pkey",
DROP COLUMN "userId",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "CardItem_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "CardItem_id_seq";
