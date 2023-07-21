/*
  Warnings:

  - A unique constraint covering the columns `[flashcardId]` on the table `ViewedFlashcard` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ViewedFlashcard_flashcardId_key" ON "ViewedFlashcard"("flashcardId");
