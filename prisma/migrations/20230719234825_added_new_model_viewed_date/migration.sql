/*
  Warnings:

  - You are about to drop the column `viewedDay` on the `ViewedFlashcard` table. All the data in the column will be lost.
  - Added the required column `viewedDateId` to the `ViewedFlashcard` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "ViewedDate" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "HitsOrMisses" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "hits" INTEGER NOT NULL,
    "misses" INTEGER NOT NULL,
    "viewedDateId" TEXT NOT NULL,
    CONSTRAINT "HitsOrMisses_viewedDateId_fkey" FOREIGN KEY ("viewedDateId") REFERENCES "ViewedDate" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ViewedFlashcard" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "flashcardId" TEXT,
    "isCorrect" BOOLEAN NOT NULL,
    "viewedDateId" TEXT NOT NULL,
    CONSTRAINT "ViewedFlashcard_flashcardId_fkey" FOREIGN KEY ("flashcardId") REFERENCES "Flashcard" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "ViewedFlashcard_viewedDateId_fkey" FOREIGN KEY ("viewedDateId") REFERENCES "ViewedDate" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ViewedFlashcard" ("flashcardId", "id", "isCorrect") SELECT "flashcardId", "id", "isCorrect" FROM "ViewedFlashcard";
DROP TABLE "ViewedFlashcard";
ALTER TABLE "new_ViewedFlashcard" RENAME TO "ViewedFlashcard";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
