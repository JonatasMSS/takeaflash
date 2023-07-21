/*
  Warnings:

  - You are about to drop the `Tag` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Tag";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "flashcards" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "userId" TEXT,
    CONSTRAINT "flashcards_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "tags" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "flashcardId" TEXT,
    "userId" TEXT,
    CONSTRAINT "tags_flashcardId_fkey" FOREIGN KEY ("flashcardId") REFERENCES "flashcards" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "tags_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ViewedFlashcard" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "flashcardId" TEXT NOT NULL,
    "isCorrect" BOOLEAN NOT NULL,
    "viewedDateId" TEXT,
    CONSTRAINT "ViewedFlashcard_flashcardId_fkey" FOREIGN KEY ("flashcardId") REFERENCES "flashcards" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ViewedFlashcard_viewedDateId_fkey" FOREIGN KEY ("viewedDateId") REFERENCES "ViewedDate" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ViewedDate" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    CONSTRAINT "ViewedDate_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "flashcards_title_key" ON "flashcards"("title");

-- CreateIndex
CREATE UNIQUE INDEX "tags_name_key" ON "tags"("name");

-- CreateIndex
CREATE UNIQUE INDEX "tags_flashcardId_key" ON "tags"("flashcardId");

-- CreateIndex
CREATE UNIQUE INDEX "ViewedFlashcard_flashcardId_key" ON "ViewedFlashcard"("flashcardId");

-- CreateIndex
CREATE UNIQUE INDEX "ViewedFlashcard_viewedDateId_key" ON "ViewedFlashcard"("viewedDateId");

-- CreateIndex
CREATE UNIQUE INDEX "ViewedDate_date_key" ON "ViewedDate"("date");
