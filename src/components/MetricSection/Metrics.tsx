/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { prisma } from "@/lib/prisma";
import { ViewedDate } from "@/schemas/Flashcard";
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

interface GraphData {
  date: Date;
  acertos: number;
  erros: number;
}

const fetchViewedFlashcards = async ({ email }: { email: string }) => {
  const response: ViewedDate[] = await fetch(
    `/api/flashcards/viewed?email=${email}`
  ).then((res) => res.json());

  const dataToGraph: GraphData[] = response.map((data) => {
    const filterMissedOrHits = (isHitted: boolean) => {
      return data.viewedFlashcards.filter(
        (flashcards) => flashcards.isCorrect === isHitted
      ).length;
    };

    return {
      date: data.date,
      acertos: filterMissedOrHits(true),
      erros: filterMissedOrHits(false),
    };
  });

  return dataToGraph;
};

export function Metrics() {
  const { data: session, status } = useSession();
  const [dataToGraph, setDataToGraph] = useState<GraphData[]>([]);

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

  if (session && status === "authenticated") {
    fetchViewedFlashcards({ email: session.user?.email! }).then((data) => {
      setDataToGraph(data);
    });
  }

  return (
    <div className="my-5 rounded-md border-2 border-black bg-white p-2 shadow-md">
      <BarChart width={500} height={500} data={dataToGraph}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis allowDecimals={false} />

        <Legend />
        <Bar dataKey="erros" fill="#ea2113" />
        <Bar dataKey="acertos" fill="#00fe61" />
      </BarChart>
    </div>
  );
}
