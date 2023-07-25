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

export interface Tag {
  id?: number;
  name: string;
  color: string;
  flashcardId?: string | null;
  userId?: string | null;
}
