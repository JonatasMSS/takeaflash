/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react";
import {
  useAnimate,
  usePresence,
  AnimatePresence,
  motion,
} from "framer-motion";

interface FrontalContentProps {
  tag: string;
  text: string;
  tagColor: string;
  onHandleSee(): void;
}

const FrontalContent = ({
  tag,
  text,
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
        <p className="font-bold">{text}</p>
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

interface BackContent {
  title: string;
  text: string;
  onHandleBack(): void;
}

const BackContent = ({ text, title, onHandleBack }: BackContent) => {
  function HeaderContent() {
    return (
      <div className="flex flex-col">
        <span className="font-bold">{title}</span>
        <p className="w-96 break-words ">{text}</p>
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
          Acertei!
        </button>
        <button
          onClick={onHandleBack}
          className="rounded-md bg-red-500 p-1 font-bold transition-all hover:scale-105 hover:bg-red-400"
        >
          Errei!
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

export function Flashcard() {
  const [isFrontal, setIsFrontal] = useState(true);

  const handleSeeAwnser = () => {
    setIsFrontal(!isFrontal);
  };

  return (
    <motion.div layout className="w-full rounded-md border-2 border-black p-2">
      <AnimatePresence mode="wait">
        {isFrontal ? (
          <FrontalContent
            tag="Fronta"
            tagColor="#f10000"
            text="Teste"
            onHandleSee={handleSeeAwnser}
          />
        ) : (
          <BackContent
            text="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
            title="AKSDJLKAS"
            onHandleBack={handleSeeAwnser}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
