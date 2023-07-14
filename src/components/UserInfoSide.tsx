import { User } from "lucide-react";
import Link from "next/link";
import { Header } from "./Header";
import { BigIntroFlashcard } from "./BigIntroFlashcard";

export function UserInfoSide() {
  function MetricSection() {
    return (
      <div className="flex w-full flex-col p-2">
        <span className="w-full border-b-2 border-zinc-700 text-2xl font-bold">
          Suas métricas
        </span>
      </div>
    );
  }

  return (
    <div className="flex h-full w-full flex-col items-center border-r-2 border-zinc-800 bg-sahara ">
      {/* Header */}
      <Header />

      <BigIntroFlashcard />

      {/* Data Section */}
      <MetricSection />
    </div>
  );
}
