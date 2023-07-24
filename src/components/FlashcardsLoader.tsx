/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { Flashcard } from "@/schemas/Flashcard";
import { FlashcardComp, FlashcardProps } from "./Flashcard";
import { useContext, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useLocalStorage } from "@/lib/LocalStorage";
import { filterContext } from "@/context/FilterProvider";
import { UppercaseFirstLetter } from "@/utils/UppercaseFirstLetter";

const fetchFlascards = async ({ email }: { email: string }) => {
  const flashcards: Flashcard[] = await fetch(
    `/api/flashcards?email=${email}`
  ).then((res) => res.json());

  return flashcards;
};

export function FlashcardLoader() {
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);

  const { data: session, status } = useSession();
  const { filter } = useContext(filterContext);
  const { localFlashcards } = useLocalStorage();

  const FilterFlashcardsWhenNoSession = (flashcards: FlashcardProps[]) => {
    let localFlashs;

    if (filter) {
      localFlashs = flashcards.filter((flash) => flash.tag === filter);
    } else {
      localFlashs = flashcards;
    }

    return localFlashs;
  };
  const FilterFlashcardsWhenIsSession = (flashcards: Flashcard[]) => {
    let sessionFlashs;

    if (filter) {
      sessionFlashs = flashcards.filter(
        (flashcard) => flashcard.tag.name === filter
      );
    } else {
      sessionFlashs = flashcards;
    }

    return sessionFlashs;
  };

  useEffect(() => {
    if (status === "authenticated" && session) {
      fetchFlascards({ email: session?.user?.email! }).then((response) => {
        const filteredFlashcards = FilterFlashcardsWhenIsSession(response);

        setFlashcards(filteredFlashcards);
      });
    } else {
      const localFlashs = FilterFlashcardsWhenNoSession(localFlashcards());

      const mapped: Flashcard[] = localFlashs.map((flash, i) => {
        return {
          content: flash.content,
          id: i.toString(),
          tag: {
            id: i,
            color: flash.tagColor,
            name: flash.tag,
          },
          title: flash.title,
          userId: null,
        };
      });

      setFlashcards(mapped);
    }
  }, [session, filter]);
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
