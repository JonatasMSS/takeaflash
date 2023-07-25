import { BigIntroFlashcard } from "./BigIntroFlashcard";

import { Header } from "./UserInfoSide/Header";

export function UserInfoSide() {
  return (
    <div className="relative flex h-full w-full flex-col items-center gap-10 border-r-2 border-zinc-800 bg-sahara ">
      {/* Header */}
      <Header />
      <BigIntroFlashcard />
    </div>
  );
}
