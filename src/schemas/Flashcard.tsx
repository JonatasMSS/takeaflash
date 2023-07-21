export interface Flashcard {
  id: string;
  title: string;
  content: string;
  tagId: number;
  userId?: string;
}
export interface ViewedFlashcard {
  id: string;
  flashcardId: string | null;
  viewedDayId: string;
  isCorrect: boolean;
}
export interface Tag {
  id: number;
  name: string;
  color: string;
  userId: string;
}
export interface ViewedDay {
  id: string;
  date: Date;
  viewedFlascards: ViewedFlashcard[];
}
