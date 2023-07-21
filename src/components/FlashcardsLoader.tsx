/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { Flashcard } from "@/schemas/Flashcard";
import { FlashcardComp } from "./Flashcard";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

const fetchFlascards = async ({ email }: { email: string }) => {
  const flashcards: Flashcard[] = await fetch(
    `/api/flashcards?email=${email}`
  ).then((res) => res.json());

  return flashcards;
};

export function FlashcardLoader() {
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);

  const { data: session, status } = useSession();

  if (status === "authenticated" && session) {
    fetchFlascards({ email: session?.user?.email! }).then((response) => {
      setFlashcards(response);
    });
  }

  return (
    <div className="flex w-full flex-col gap-5">
      {flashcards.map((flash, i) => (
        <FlashcardComp
          key={flash.id}
          content={flash.content}
          tag={flash.tag.name}
          title={flash.title}
          tagColor={flash.tag.color}
        />
      ))}
    </div>
  );
}
