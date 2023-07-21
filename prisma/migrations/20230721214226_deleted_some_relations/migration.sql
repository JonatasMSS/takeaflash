/*
  Warnings:

  - You are about to drop the `ViewedDate` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ViewedFlashcard` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `userId` on table `flashcards` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "ViewedFlashcard_flashcardId_key";

-- DropIndex
DROP INDEX "ViewedFlashcard_viewedDateId_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "ViewedDate";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "ViewedFlashcard";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_flashcards" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "tagId" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "flashcards_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "tags" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "flashcards_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_flashcards" ("content", "id", "tagId", "title", "userId") SELECT "content", "id", "tagId", "title", "userId" FROM "flashcards";
DROP TABLE "flashcards";
ALTER TABLE "new_flashcards" RENAME TO "flashcards";
CREATE UNIQUE INDEX "flashcards_title_key" ON "flashcards"("title");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
