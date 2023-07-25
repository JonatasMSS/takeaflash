/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { Flashcard } from "@/schemas/Flashcard";
import { FlashcardComp, FlashcardProps } from "./Flashcard";
import { useContext, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useLocalStorage } from "@/lib/LocalStorage";
import { filterContext } from "@/context/FilterProvider";
import { UppercaseFirstLetter } from "@/utils/UppercaseFirstLetter";
import { DeleteFlashcardFromDatabase } from "./Flashcard/handleDeleteFlashcard";

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
  const { localFlashcards, deleteLocalFlashcards } = useLocalStorage();

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

  const handleDelete = async (title: string) => {
    if (session) {
      await DeleteFlashcardFromDatabase(title);

      const newFlashcardsAfterDelete = flashcards.filter(
        (flash) => flash.title !== title
      );

      setFlashcards(newFlashcardsAfterDelete);
      window.location.reload();
    } else {
      deleteLocalFlashcards(title, "byName");
      alert("Flashcard deletado com sucesso");
      const newFlashcardsAfterDelete = flashcards.filter(
        (flash) => flash.title !== title
      );
      setFlashcards(newFlashcardsAfterDelete);
      window.location.reload();
    }
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
          id={flash.id}
          key={flash.id}
          content={flash.content}
          tag={flash.tag.name}
          title={flash.title}
          tagColor={flash.tag.color}
          onHandleDelete={() => {
            handleDelete(flash.title);
          }}
        />
      ))}
    </div>
  );
}
