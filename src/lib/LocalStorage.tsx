import { FlashcardProps } from "@/components/Flashcard";
import { SelectorItem } from "@/components/Selector";

export function useLocalStorage() {
  const localTags = () => {
    const storage: SelectorItem = JSON.parse(
      localStorage.getItem("tags") ?? "[]"
    );
    return storage;
  };

  const setLocalTags = (tags: SelectorItem) => {
    const tagsInLocalStorage = localTags();

    const newTagsList = [...tagsInLocalStorage, ...tags];
    try {
      localStorage.setItem("tags", JSON.stringify(newTagsList));
      return "Tags armazenadas";
    } catch (error) {
      return error;
    }
  };

  const localFlashcards = () => {
    const flashcards: FlashcardProps[] = JSON.parse(
      localStorage.getItem("flashcards") ?? "[]"
    );

    return flashcards;
  };
  const setLocalFlashcards = (flashcard: FlashcardProps) => {
    const flashcardsInLocalStorage = localFlashcards();
    const newFlashcardList = [...flashcardsInLocalStorage, flashcard];
    localStorage.setItem("flashcards", JSON.stringify(newFlashcardList));
  };

  return {
    localTags,
    setLocalTags,
    setLocalFlashcards,
    localFlashcards,
  };
}
