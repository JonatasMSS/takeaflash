import { Flashcard } from "@/components/Flashcard";
import { Selector } from "@/components/Selector";

const Filter = () => {
  return (
    <div className="flex w-full items-center gap-2 rounded-lg border-2 border-black p-2">
      <span className="font-bold">Filtrar por</span>
      <Selector itens={[]} />
    </div>
  );
};

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-5 p-5">
      <Filter />

      {/* Component */}

      <Flashcard />
    </main>
  );
}
