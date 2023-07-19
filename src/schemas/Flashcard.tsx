export interface Flashcard {
  id: string;
  title: string;
  content: string;
  tagId: number;
  userId?: string;
}
export interface ViewedFlashcard {
  id: string;
  flashcardId: string;
  viewedDay: Date;
  isCorrect: boolean;
}
export interface Tag {
  id: number;
  name: string;
  color: string;
  userId: string;
}
