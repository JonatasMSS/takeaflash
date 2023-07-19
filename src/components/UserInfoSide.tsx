import { BigIntroFlashcard } from "./BigIntroFlashcard";

import { Header } from "./UserInfoSide/Header";
import { MetricSection } from "./UserInfoSide/MetricSection";

export function UserInfoSide() {
  return (
    <div className="relative flex h-full w-full flex-col items-center border-r-2 border-zinc-800 bg-sahara ">
      {/* Header */}
      <Header />
      <BigIntroFlashcard />

      {/* Data Section */}
      <MetricSection />
    </div>
  );
}
