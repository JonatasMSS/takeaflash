-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ViewedFlashcard" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "flashcardId" TEXT,
    "isCorrect" BOOLEAN NOT NULL,
    "viewedDateId" TEXT NOT NULL,
    "userId" TEXT,
    CONSTRAINT "ViewedFlashcard_flashcardId_fkey" FOREIGN KEY ("flashcardId") REFERENCES "Flashcard" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "ViewedFlashcard_viewedDateId_fkey" FOREIGN KEY ("viewedDateId") REFERENCES "ViewedDate" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ViewedFlashcard_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_ViewedFlashcard" ("flashcardId", "id", "isCorrect", "viewedDateId") SELECT "flashcardId", "id", "isCorrect", "viewedDateId" FROM "ViewedFlashcard";
DROP TABLE "ViewedFlashcard";
ALTER TABLE "new_ViewedFlashcard" RENAME TO "ViewedFlashcard";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
