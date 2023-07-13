import { User } from "lucide-react";
import Link from "next/link";
import { Header } from "./Header";
import { BigIntroFlashcard } from "./BigIntroFlashcard";

export function UserInfoSide() {
  return (
    <div className="flex h-full w-full flex-col items-center border-r-2 border-zinc-800 bg-sahara ">
      {/* Header */}
      <Header />

      <BigIntroFlashcard />
    </div>
  );
}
