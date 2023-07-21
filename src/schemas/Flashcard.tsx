export interface User {
  id: string;
  username: string;
  email: string;
  flashcards: Flashcard[];
  tags: Tag[];
}

export interface Flashcard {
  id: string;
  title: string;
  content: string;
  userId: string | null;
  tag: Tag;
}
export interface ViewedFlashcard {
  id: string;
  flashcardId: string;
  isCorrect: boolean;
  viewedDateId?: string;
}
export interface ViewedDate {
  id: string;
  date: Date;
  viewedFlashcards: ViewedFlashcard[];
  userId: string;
}
export interface Tag {
  id: number;
  name: string;
  color: string;
  flashcardId: string | null;
  userId: string | null;
}
