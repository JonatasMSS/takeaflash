import { Filter } from "@/components/Filter";
import { FlashcardLoader } from "@/components/FlashcardsLoader";
import { FilterProvider } from "@/context/FilterProvider";

export default async function Home() {
  return (
    <main className="flex max-h-screen flex-col items-center gap-5 overflow-y-auto p-5">
      <FilterProvider>
        <Filter />

        {/* Component */}

        <FlashcardLoader />
      </FilterProvider>
    </main>
  );
}
