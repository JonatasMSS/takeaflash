/*
  Warnings:

  - You are about to drop the column `flashcardId` on the `ViewedFlashcard` table. All the data in the column will be lost.
  - Added the required column `viewedFlashcardId` to the `flashcards` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_flashcards" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "userId" TEXT,
    "tagId" INTEGER NOT NULL,
    "viewedFlashcardId" TEXT NOT NULL,
    CONSTRAINT "flashcards_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "tags" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "flashcards_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "flashcards_viewedFlashcardId_fkey" FOREIGN KEY ("viewedFlashcardId") REFERENCES "ViewedFlashcard" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_flashcards" ("content", "id", "tagId", "title", "userId") SELECT "content", "id", "tagId", "title", "userId" FROM "flashcards";
DROP TABLE "flashcards";
ALTER TABLE "new_flashcards" RENAME TO "flashcards";
CREATE UNIQUE INDEX "flashcards_title_key" ON "flashcards"("title");
CREATE TABLE "new_ViewedFlashcard" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "isCorrect" BOOLEAN NOT NULL,
    "viewedDateId" TEXT,
    CONSTRAINT "ViewedFlashcard_viewedDateId_fkey" FOREIGN KEY ("viewedDateId") REFERENCES "ViewedDate" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_ViewedFlashcard" ("id", "isCorrect", "viewedDateId") SELECT "id", "isCorrect", "viewedDateId" FROM "ViewedFlashcard";
DROP TABLE "ViewedFlashcard";
ALTER TABLE "new_ViewedFlashcard" RENAME TO "ViewedFlashcard";
CREATE UNIQUE INDEX "ViewedFlashcard_viewedDateId_key" ON "ViewedFlashcard"("viewedDateId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
