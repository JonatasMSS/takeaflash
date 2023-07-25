"use client";
import { useState } from "react";
import { FrontalView, BackView } from "./BigIntroFlashcard/Views";
import { AnimatePresence } from "framer-motion";

export function BigIntroFlashcard() {
  const [showHelper, setShowHelper] = useState(false);

  return (
    <AnimatePresence mode="wait">
      {showHelper ? (
        <BackView key={0} setHelperState={setShowHelper} />
      ) : (
        <FrontalView key={1} setHelperState={setShowHelper} />
      )}
    </AnimatePresence>
  );
}
