import { SelectorItem } from "@/components/Selector";

export function useLocalStorage() {
  const localTags = () => {
    const storage: SelectorItem = JSON.parse(
      localStorage.getItem("tags") ?? "[]"
    );
    return storage;
  };

  const setLocalTags = (tags: SelectorItem) => {
    const tagsToJSON = JSON.stringify(tags);
    try {
      localStorage.setItem("tags", tagsToJSON);
      return "Tags armazenadas";
    } catch (error) {
      return error;
    }
  };

  return {
    localTags,
    setLocalTags,
  };
}
