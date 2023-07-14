import { Selector } from "@/components/Selector";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      <div className="flex w-full items-center gap-2 rounded-lg border-2 border-black p-2">
        <span className="font-bold">Filtrar por</span>
        <Selector />
      </div>
    </main>
  );
}
