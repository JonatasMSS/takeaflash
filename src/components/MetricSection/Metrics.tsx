/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { LockIcon } from "lucide-react";

export function Metrics() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-2 p-10">
      <div className="rounded-full border-2 border-black bg-red-500 p-5 shadow-md">
        <LockIcon size={64} />
      </div>
      <span> Para acessar suas métricas é preciso ter um login...</span>
    </div>
  );
}
