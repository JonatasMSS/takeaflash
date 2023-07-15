"use client";

import { MouseEventHandler, useState } from "react";

const FrontalExibition = () => {
  return (
    <div className="flex w-full cursor-pointer flex-col rounded-md border-2 border-black p-2 shadow-md transition-all hover:scale-105">
      <span className="w-fit rounded-md bg-red-400 px-1 font-bold text-martinquier">
        {" "}
        TAG{" "}
      </span>

      <p className="font-bold text-martinquier">Qual a fórmula de bhaskara?</p>
    </div>
  );
};

const BackExibition = () => {
  return (
    <div className="flex w-full cursor-pointer items-center rounded-md border-2 border-black p-2 shadow-md transition-all">
      <p className="w-full  font-bold text-martinquier">
        Qual a fórmula de bhaskara?
      </p>
      <div className="flex items-center gap-5">
        <button className="h-fit rounded-md bg-green-500 p-1 text-base font-bold transition-all hover:bg-green-400">
          Acertei!
        </button>
        <button className="h-fit rounded-md bg-red-500 p-1 text-base font-bold transition-all hover:bg-red-400">
          Errei!
        </button>
      </div>
    </div>
  );
};

const Transitioner = () => {
  const [exibitionIndex, setExibiton] = useState(0);
  const Exibitions = [<FrontalExibition key={0} />, <BackExibition key={1} />];

  const handlePressedFlashcard = () => {
    setExibiton((prev) => (prev === 0 ? 1 : 0));
    console.log("Mudança de estado" + exibitionIndex);
  };

  return (
    <div className="w-full" onClick={handlePressedFlashcard}>
      {Exibitions[exibitionIndex]}
    </div>
  );
};

export function Flashcard() {
  return <Transitioner />;
}
