/*
  Warnings:

  - You are about to drop the column `description` on the `Cards` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Cards" DROP COLUMN "description",
ADD COLUMN     "lastTimePracticed" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "CardItem" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "cardId" INTEGER NOT NULL,

    CONSTRAINT "CardItem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CardItem" ADD CONSTRAINT "CardItem_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "Cards"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
