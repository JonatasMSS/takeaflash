"use client";
import { useState } from "react";
import { FrontalView, BackView } from "./BigIntroFlashcard/Views";

export function BigIntroFlashcard() {
  const [showHelper, setShowHelper] = useState(false);

  return showHelper ? (
    <BackView setHelperState={setShowHelper} />
  ) : (
    <FrontalView setHelperState={setShowHelper} />
  );
}
