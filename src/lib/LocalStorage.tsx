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
  const deleteLocalFlashcards = (
    typeCont: string,
    type: "byId" | "byName" = "byId"
  ) => {
    const flashcardsInLocalStorage = localFlashcards();

    let newFlashcardListWithoutSelected;
    if (type === "byId") {
      newFlashcardListWithoutSelected = flashcardsInLocalStorage.filter(
        (flash) => flash.id !== typeCont
      );
    } else if (type === "byName") {
      newFlashcardListWithoutSelected = flashcardsInLocalStorage.filter(
        (flash) => flash.title !== typeCont
      );
    }

    localStorage.setItem(
      "flashcards",
      JSON.stringify(newFlashcardListWithoutSelected)
    );
  };
  const setLocalFlashcards = (flashcard: FlashcardProps) => {
    const flashcardsInLocalStorage = localFlashcards();
    const newFlashcardList = [...flashcardsInLocalStorage, flashcard];
    localStorage.setItem("flashcards", JSON.stringify(newFlashcardList));
  };

  const localFilter = () => {
    const localFilter: string = JSON.parse(
      localStorage.getItem("filterBy") ?? "[]"
    );

    return localFilter;
  };

  const setLocalFilter = (filterBy: string) => {
    localStorage.setItem("filterBy", filterBy);
  };

  return {
    localTags,
    setLocalTags,
    setLocalFlashcards,
    localFlashcards,
    setLocalFilter,
    localFilter,
    deleteLocalFlashcards,
  };
}
