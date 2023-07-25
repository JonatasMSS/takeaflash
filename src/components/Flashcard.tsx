/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocalStorage } from "@/lib/LocalStorage";
import { useSession } from "next-auth/react";
import { DeleteFlashcardFromDatabase } from "./Flashcard/handleDeleteFlashcard";
import { useRouter } from "next/navigation";
import { Flashloader } from "./Flashcard/FlashLoader";
interface FrontalContentProps {
  tag: string;
  title: string;
  tagColor: string;
  onHandleSee(): void;
}

interface BackContentProps
  extends Omit<FrontalContentProps, "tag" | "tagColor" | "onHandleSee"> {
  content: string;
  onHandleBack(): void;
  onHandleDelete?(): void;
  id?: string;
}

export interface FlashcardProps
  extends Omit<FrontalContentProps, "onHandleSee">,
    Omit<BackContentProps, "onHandleBack" | "title"> {
  id?: string;
}

const FrontalContent = ({
  tag,
  title,
  tagColor,
  onHandleSee,
}: FrontalContentProps) => {
  function HeaderContent() {
    return (
      <div className="flex w-full flex-col">
        <span
          style={{ backgroundColor: tagColor }}
          className="w-fit rounded-md  px-2 font-bold"
        >
          {tag}
        </span>
        <p className="font-bold">{title}</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ rotateX: 90 }}
      animate={{ rotateX: 0 }}
      exit={{ rotateX: -90 }}
      className="flex w-full items-center"
    >
      <HeaderContent />

      <button
        onClick={onHandleSee}
        className="h-fit rounded-md bg-yellow-400 px-2 font-bold transition-all hover:scale-105 hover:bg-yellow-300"
      >
        Ver
      </button>
    </motion.div>
  );
};

const BackContent = ({
  content,
  title,
  onHandleBack,
  onHandleDelete,
}: BackContentProps) => {
  function HeaderContent() {
    return (
      <div className="flex flex-col">
        <span className="font-bold">{title}</span>
        <p className="w-96 break-words ">{content}</p>
      </div>
    );
  }

  function ActionButtons() {
    return (
      <div className="flex gap-2 ">
        <button
          onClick={onHandleBack}
          className="rounded-md bg-green-500 p-1 font-bold transition-all hover:scale-105 hover:bg-green-400"
        >
          Retornar
        </button>
        <button
          onClick={onHandleDelete}
          className="rounded-md bg-red-500 p-1 font-bold transition-all hover:scale-105 hover:bg-red-400"
        >
          Deletar
        </button>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ rotateX: -90 }}
      animate={{ rotateX: 0 }}
      exit={{ rotateX: 90 }}
      className="flex w-full items-center justify-between"
    >
      <HeaderContent />
      <ActionButtons />
    </motion.div>
  );
};

export function FlashcardComp({
  title,
  tagColor,
  content,
  tag,
  id,
  onHandleDelete,
}: FlashcardProps) {
  const [isFrontal, setIsFrontal] = useState(true);

  const handleSeeAwnser = () => {
    setIsFrontal(!isFrontal);
  };

  return (
    <motion.div layout className="w-full rounded-md border-2 border-black p-2">
      <AnimatePresence mode="wait">
        {isFrontal ? (
          <FrontalContent
            tag={tag}
            tagColor={tagColor}
            title={title}
            onHandleSee={handleSeeAwnser}
          />
        ) : (
          <BackContent
            content={content}
            title={title}
            onHandleDelete={onHandleDelete}
            onHandleBack={handleSeeAwnser}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
