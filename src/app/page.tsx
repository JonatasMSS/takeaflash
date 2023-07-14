import { Selector } from "@/components/Selector";

export default async function Home() {
  const testData = [
    { tagColor: "#bc1616", text: "a", value: "a" },
    { tagColor: "#bc1616", text: "b", value: "b" },
    { tagColor: "#bc1616", text: "c", value: "c" },
    { tagColor: "#bc1616", text: "d", value: "d" },
    { tagColor: "#bc1616", text: "e", value: "e" },
    { tagColor: "#bc1616", text: "Fazendeiro", value: "fazendeiro" },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      <div className="flex w-full items-center gap-2 rounded-lg border-2 border-black p-2">
        <span className="font-bold">Filtrar por</span>
        <Selector itens={testData} />
      </div>
    </main>
  );
}
