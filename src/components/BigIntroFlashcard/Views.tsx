"use client";

import { Plus, HelpCircle, ArrowBigLeft } from "lucide-react";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

interface FrontalViewProps {
  setHelperState: Dispatch<SetStateAction<boolean>>;
}

export const FrontalView = ({ setHelperState }: FrontalViewProps) => {
  function Title() {
    return (
      <h2 className="flex flex-col font-alt text-8xl">
        Take <span className="text-grenadier">An Flash</span>
      </h2>
    );
  }

  function ActionButtons() {
    return (
      <div className="flex flex-col justify-evenly">
        <button className="rounded-full bg-green-500 p-1">
          <Plus size={50} strokeWidth={1.5} />
        </button>
        <button className=" rounded-full bg-gorse p-1">
          <HelpCircle size={50} strokeWidth={1.5} onClick={handleOnShowTips} />
        </button>
      </div>
    );
  }

  const handleOnShowTips = () => {
    setHelperState((prev) => !prev);
  };

  return (
    <motion.div
      initial={{ rotateX: -90 }}
      animate={{ rotateX: 0 }}
      exit={{ rotateX: 90 }}
      transition={{ ease: "easeInOut" }}
      className=" my-20 flex w-[90%] justify-between rounded-lg border-[1px] border-black bg-softGorse p-5  shadow-md"
    >
      <Title />
      <ActionButtons />
    </motion.div>
  );
};

interface BackViewProps extends FrontalViewProps {}

export const BackView = ({ setHelperState }: BackViewProps) => {
  const handleBack = () => {
    setHelperState((prev) => !prev);
  };

  function Header() {
    return (
      <div className="flex w-full items-center gap-2 ">
        <button
          onClick={handleBack}
          className="rounded-full border-2 border-black bg-yellow-300 p-2  transition-colors hover:bg-yellow-200"
        >
          <ArrowBigLeft size={32} />
        </button>
        <h2 className="text-xl">
          O que é o <span className="font-bold">Take A Flash?</span>
        </h2>
      </div>
    );
  }

  function Body() {
    return (
      <div className="w-full rounded-md border-2 border-black bg-white p-2">
        <p>
          É um criador de flashcards para{" "}
          <span className="font-bold">
            auxiliar alunos em seus estudos, principalmente em suas revisões
          </span>
          . Para criar seu primeiro flashcard, basta pressionar o{" "}
          <span className="font-bold text-green-500">botão verde</span>
        </p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ rotateX: 90 }}
      animate={{ rotateX: 0 }}
      exit={{ rotateX: -90 }}
      transition={{ ease: "easeInOut" }}
      className=" my-20 flex w-[90%] flex-col justify-between gap-3 rounded-lg border-[1px] border-black bg-softGorse p-5  shadow-md"
    >
      <Header />
      <Body />
    </motion.div>
  );
};
