"use client";
import { LockIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  BarChart,
  Bar,
  Tooltip,
} from "recharts";

import { ViewedDay } from "@/schemas/Flashcard";

interface GraphData {
  date: Date;
  acertos: number;
  erros: number;
}

const fetchViewedFlashcards = async () => {
  const response: ViewedDay[] = await fetch(
    "/api/datas/flashcards/viewed"
  ).then((res) => res.json());
  const dataToGraph: GraphData[] = response.map((viewedDate) => {
    const hitsOrMisses = (isHits: boolean = true) => {
      const Flashcards = viewedDate.viewedFlascards.filter(
        (flashcard) => flashcard.isCorrect === isHits
      );
      return Flashcards.length;
    };

    return {
      date: viewedDate.date,
      acertos: hitsOrMisses(true),
      erros: hitsOrMisses(false),
    };
  });

  return dataToGraph;
};

export function Metrics() {
  const { data: session } = useSession();
  const [viewedFlashcards, setViewedFlashcards] = useState<GraphData[]>();

  useEffect(() => {
    fetchViewedFlashcards().then((data) => setViewedFlashcards(data));
  }, []);

  // Quando não estiver logado

  if (!session) {
    return (
      <div className="flex w-full flex-col items-center justify-center gap-2 p-10">
        <div className="rounded-full border-2 border-black bg-red-500 p-5 shadow-md">
          <LockIcon size={64} />
        </div>
        <span> Para acessar suas métricas é preciso ter um login...</span>
      </div>
    );
  }

  return (
    <div className="my-5 rounded-md border-2 border-black bg-white p-2 shadow-md">
      <BarChart width={500} height={500} data={viewedFlashcards}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="erros" fill="#ea2113" />
        <Bar dataKey="acertos" fill="#00fe61" />
      </BarChart>
    </div>
  );
}
